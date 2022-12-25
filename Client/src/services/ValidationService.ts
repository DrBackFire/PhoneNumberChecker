import { MuiTelInputCountry } from "mui-tel-input";
import { SupportedCountries } from "../models/SupportedCountries";
import { ValidationPayload } from "../models/ValidationPayload";

export class ValidationService {
  private _default: SupportedCountries | undefined;

  private _numberToValidate: ValidationPayload = {
    countryCode: 0,
    phoneNumber: 0,
  };

  constructor(private supportedCountries: SupportedCountries[]) {
    if (supportedCountries) {
      this._default = this.supportedCountries.find((x) => x.isDefault);
    }
  }

  get numberToValidate() {
    return this._numberToValidate;
  }

  set numberToValidate(value) {
    this._numberToValidate = value;
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

  GetHelperText(countryCallingCode: number): string {
    const ph =
      this.supportedCountries.find((x) => x.countryCode === countryCallingCode)
        ?.numberPlaceHolder ??
      this._default?.numberPlaceHolder ??
      "";

    return `e.g. ${ph}`;
  }
}
