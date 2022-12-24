import {
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  Container,
  Box,
  NativeSelect,
  Stack,
  Button,
  Typography,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import CountryDialog from "./CountryDialog";

function Form() {
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  return (
    <section className="bg-[#F0F3F4] py-7 text-gray-600 h-72 px-4">
      <Stack spacing={5} className="max-w-3xl m-auto">
        <Box className="h-2"></Box>

        <Stack direction="row" spacing={1}>
          <Button size="large" onClick={() => setIsDialogOpen(true)}>
            <ReactCountryFlag
              style={{
                fontSize: "1.5em",
              }}
              countryCode="AU"
            />
            Australia
          </Button>

          <FormControl fullWidth>
            <InputLabel>Phone Number</InputLabel>
            <OutlinedInput
              placeholder="e.g. 0411 000 000"
              label="Phone Number"
            />
          </FormControl>
        </Stack>

        <Box>
          <Button variant="contained" fullWidth>
            Verify
          </Button>
        </Box>
      </Stack>

      <CountryDialog
        onClose={() => {
          setIsDialogOpen(false);
        }}
        open={isDialogOpen}
        selectedValue=""
      />
    </section>
  );
}

export default Form;
