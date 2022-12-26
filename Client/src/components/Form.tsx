import { Box, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { BaseComponentProps } from "../models/BaseComponentProps";
import FormInput from "./FormInput";
import { CSVLink } from "react-csv";
import { useMutation } from "react-query";
import { validatePhoneNumber } from "../services/Api";
import { NumberValidationDTO } from "../models/NumberValidationDTO";
import { ValidationPayload } from "../models/ValidationPayload";

const csvData = [
  ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"],
];

export interface FormProps extends BaseComponentProps {}

function Form(props: FormProps) {
  const { mutateAsync } = useMutation<
    NumberValidationDTO,
    unknown,
    ValidationPayload,
    unknown
  >("validatePhoneNumber");

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const { validationService } = props;

    validationService &&
      (await mutateAsync(validationService.GetNumberToValidate()));
  };

  return (
    <section className="bg-[#F0F3F4] py-7 text-gray-600 px-4">
      <form>
        <Stack spacing={3} className="max-w-3xl m-auto">
          <FormInput {...props} />

          <Box>
            <Button
              variant="contained"
              fullWidth
              type="submit"
              onClick={handleSubmit}
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
