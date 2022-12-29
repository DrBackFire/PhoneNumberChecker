import { Box, Button, Snackbar, Alert } from "@mui/material";
import Stack from "@mui/material/Stack";
import { BaseComponentProps } from "../models/BaseComponentProps";
import FormInput from "./FormInput";
import { useMutation } from "react-query";
import { validatePhoneNumber } from "../services/Api";
import { MuiTelInputInfo } from "mui-tel-input";
import { useState } from "react";
import { useOfflineValidation } from "../hooks/useOfflineValidation";

export interface FormProps extends BaseComponentProps {}

function Form(props: FormProps) {
  const { validationService } = props;
  const { setValidatedNumbers } = useOfflineValidation();

  const { mutateAsync, error } = useMutation("validatePhoneNumber", {
    mutationFn: validatePhoneNumber,
    onSuccess: (data) => {
      setValidatedNumbers(data);
    },
    onError: () => {
      setIsError(true);
    },
    retry: 0,
  });

  const [isError, setIsError] = useState(false);
  const [errorTxt, setErrorTxt] = useState("");
  const [countryValue, setCountryValue] = useState("");
  const [countryInfo, setCountryInfo] = useState<MuiTelInputInfo>();

  const handleChange = (newValue: string, info: MuiTelInputInfo) => {
    setCountryValue(newValue);
    setCountryInfo(info);

    validationService?.SetValidationPayload({
      payload: {
        countryCode: +(info.countryCallingCode ?? "0"),
        phoneNumber: +(info.nationalNumber ?? "0"),
      },
    });
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const isInputValid =
      countryInfo && validationService?.ValidateInput(countryInfo);

    if (isInputValid) {
      validationService && (await mutateAsync(validationService.payload));

      /** Setting to empty str will revert the selection to the default value,
       *   completely losing the user's selection. Setting it to the country's
       *   calling code fixes this issue.
       *
       *  As a save fallback setting it to empty str.
       */
      setCountryValue(`+${countryInfo.countryCallingCode}` ?? "");
    } else {
      setIsError(true);
      setErrorTxt("Invalid number");
    }
  };

  return (
    <section className="bg-[#F0F3F4] py-7 text-gray-600 px-4">
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={isError}
        autoHideDuration={3000}
        onClose={() => setIsError(false)}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          {(error as string) ?? errorTxt ?? ""}
        </Alert>
      </Snackbar>
      <form>
        <Stack spacing={3} className="max-w-3xl m-auto">
          <FormInput
            {...props}
            isError={isError}
            countryInfo={countryInfo}
            countryValue={countryValue}
            onChange={handleChange}
          />

          <Box>
            <Button
              variant="contained"
              fullWidth
              type="submit"
              onClick={handleSubmit}
              disabled={!!!countryInfo?.nationalNumber}
            >
              Verify
            </Button>
          </Box>
        </Stack>
      </form>
    </section>
  );
}

export default Form;
