import { Box, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { BaseComponentProps } from "../models/BaseComponentProps";
import FormInput from "./FormInput";

export interface FormProps extends BaseComponentProps {}

function Form({ validationService }: FormProps) {
  return (
    <section className="bg-[#F0F3F4] py-7 text-gray-600 h-72 px-4">
      <Stack spacing={5} className="max-w-3xl m-auto">
        <Box className="h-2"></Box>

        <FormInput validationService={validationService} />

        <Box>
          <Button variant="contained" fullWidth>
            Verify
          </Button>
        </Box>
      </Stack>
    </section>
  );
}

export default Form;
