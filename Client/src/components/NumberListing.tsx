import SelectAllIcon from "@mui/icons-material/SelectAllOutlined";
import { BaseComponentProps } from "../models/BaseComponentProps";
import { NumberValidationDTO } from "../models/NumberValidationDTO";
import NumberRow from "./NumberRow";
import {
  List,
  ListItem,
  Divider,
  ListItemAvatar,
  Typography,
  Avatar,
  ListItemText,
  IconButton,
  TextField,
  Stack,
  Checkbox,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { v4 as uuidv4 } from "uuid";
import useLocalState from "../hooks/useLocalState";

interface NumberListingProp extends BaseComponentProps {}

function NumberListing(props: NumberListingProp) {
  const { data } = useLocalState<NumberValidationDTO[]>(
    "VALIDATED_NUMBERS",
    []
  );

  return (
    <section className="max-w-3xl mx-auto p-5 text-gray-600 sm:px-2">
      <div className="flex items-center justify-between pb-5 ml-2 text-sm">
        <p className="font-medium mr-3 text-center">Valid</p>
        <h2 className="font-medium flex-grow mr-4">Number</h2>
        {/* <TextField
          placeholder="Search..."
          inputMode="search"
          variant="standard"
        /> */}
        {/* <IconButton>
          <SelectAllIcon />
        </IconButton> */}
      </div>

      {data?.map((row) => (
        <NumberRow {...props} number={row} key={row.id} />
      ))}
    </section>
  );
}

export default NumberListing;
