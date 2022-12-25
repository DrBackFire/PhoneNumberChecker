import { MuiTelInputInfo, MuiTelInput } from "mui-tel-input";
import { useState } from "react";
import { BaseComponentProps } from "../models/BaseComponentProps";

export interface FormInputProps extends BaseComponentProps {}

function FormInput({ validationService }: FormInputProps) {
  const [countryValue, setCountryValue] = useState("");
  const [countryInfo, setCountryInfo] = useState<MuiTelInputInfo>();

  const handleChange = (newValue: string, info: MuiTelInputInfo) => {
    setCountryValue(newValue);
    setCountryInfo(info);

    if (validationService) {
      validationService.numberToValidate = {
        countryCode: +(info.countryCallingCode ?? "0"),
        phoneNumber: +(info.nationalNumber ?? "0"),
      };
    }
  };

  return (
    <MuiTelInput
      onlyCountries={validationService?.countryCodes}
      defaultCountry={validationService?.defaultCountry}
      variant="outlined"
      value={countryValue}
      onChange={handleChange}
      disableDropdown={!!!validationService?.countryCodes}
      helperText={validationService?.GetHelperText(
        +(
          countryInfo?.countryCallingCode ??
          validationService?.defaultCallingCode ??
          "0"
        )
      )}
      error={false}
    />
  );
}

export default FormInput;
