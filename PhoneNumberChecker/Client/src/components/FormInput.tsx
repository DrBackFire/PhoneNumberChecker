import { MuiTelInputInfo, MuiTelInput, MuiTelInputProps } from "mui-tel-input";
import { BaseComponentProps } from "../models/BaseComponentProps";
export interface FormInputProps extends BaseComponentProps {
  countryValue: string;
  countryInfo: MuiTelInputInfo | undefined;
  onChange: MuiTelInputProps["onChange"];
  isError: boolean;
}

function FormInput({
  validationService,
  countryValue,
  countryInfo,
  onChange,
  isError,
}: FormInputProps) {
  return (
    <MuiTelInput
      autoFocus /** To allow users to start typing when page loads */
      onlyCountries={
        !validationService?.countryCodes.length
          ? undefined
          : validationService?.countryCodes
      } /** To only show supported countries provided by the api */
      defaultCountry={
        validationService?.defaultCountry ?? "AU"
      } /** Default country to load */
      forceCallingCode /** To prevent users from deleting calling country code */
      variant="outlined"
      value={countryValue}
      onChange={onChange}
      disableDropdown={
        !!!validationService?.countryCodes.length
      } /** Disable dropdown if api does not return supported countries */
      helperText={validationService?.GetHelperText(
        +(
          countryInfo?.countryCallingCode ??
          validationService?.defaultCallingCode ??
          "0"
        )
      )}
      error={isError}
    />
  );
}

export default FormInput;
