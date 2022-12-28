import { MuiTelInputCountry, MuiTelInputInfo } from "mui-tel-input";
import {
  NumberValidationDTO,
  PhoneNumberType,
} from "../models/NumberValidationDTO";
import { SupportedCountries } from "../models/SupportedCountries";
import { ValidationPayload } from "../models/ValidationPayload";
import parsePhoneNumber from "libphonenumber-js";
import { v4 as uuidv4 } from "uuid";
import { startCase } from "lodash";

export class ValidationService {
  private _default: SupportedCountries | undefined;

  private _numberToValidate: ValidationPayload = {
    payload: {
      countryCode: 0,
      phoneNumber: 0,
    },
  };

  constructor(private supportedCountries: SupportedCountries[]) {
    if (supportedCountries) {
      this._default = this.supportedCountries.find((x) => x.isDefault);
    }
  }

  SetValidationPayload(value: ValidationPayload) {
    this._numberToValidate = value;
  }

  get payload(): ValidationPayload {
    // To ensure that on error call back does not lose class scope
    this._numberToValidate.onErrorCallback = this.ValidateOffline.bind(this);
    return this._numberToValidate;
  }

  get countryCodes(): MuiTelInputCountry[] {
    return this.supportedCountries.map((x) => x.region) as MuiTelInputCountry[];
  }

  get defaultCountry(): MuiTelInputCountry | undefined {
    return this._default?.region as MuiTelInputCountry;
  }

  get defaultCallingCode() {
    return this._default?.countryCode?.toString();
  }

  ValidateInput({ numberValue }: MuiTelInputInfo) {
    return !!parsePhoneNumber(numberValue ?? "");
  }

  GetHelperText(countryCallingCode: number): string {
    const ph =
      this.supportedCountries.find((x) => x.countryCode === countryCallingCode)
        ?.numberPlaceHolder ??
      this._default?.numberPlaceHolder ??
      "";

    return `e.g. ${ph}`;
  }

  ValidateOffline(): NumberValidationDTO {
    const { countryCode, phoneNumber: number } = this._numberToValidate.payload;

    const phoneNumber = parsePhoneNumber(`+${countryCode}${number}`);

    return {
      formattedNumberType: startCase(
        phoneNumber?.getType()?.toLocaleLowerCase()?.split("_")?.join(" ") ??
          PhoneNumberType[11].toLowerCase()?.split("_")?.join(" ")
      ),
      id: uuidv4(),
      intlFormat: phoneNumber?.formatInternational() ?? "",
      isPossible: phoneNumber?.isPossible() ?? false,
      isSelected: false,
      isValid: phoneNumber?.isValid() ?? false,
      numberType: phoneNumber?.getType(),
      phoneNumber: +(phoneNumber?.formatNational() ?? "0"),
      region: phoneNumber?.country ?? "",
    };
  }
}
