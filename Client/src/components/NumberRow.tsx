import MoreVertIcon from "@mui/icons-material/MoreVert";
import InboxIcon from "@mui/icons-material/Inbox";

import {
  Box,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { BaseComponentProps } from "../models/BaseComponentProps";
import ReactCountryFlag from "react-country-flag";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { NumberValidationDTO } from "../models/NumberValidationDTO";
import { useMutation } from "react-query";
import ContextMenu from "./ActionDrawer";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ActionDrawer from "./ActionDrawer";
import useBreakpoint from "../hooks/useBreakpoint";
const CHECK_ICON = <CheckIcon color="success" />;
const CLOSE_ICON = <CloseIcon color="error" />;

interface NumberRowProp extends BaseComponentProps {
  number: NumberValidationDTO;
}

function NumberRow({ number, validationService }: NumberRowProp) {
  const { mutate } = useMutation<
    NumberValidationDTO,
    unknown,
    NumberValidationDTO,
    unknown
  >("updateValidatedNumbers");

  const [open, setOpen] = useState(false);

  const size = useBreakpoint();

  const isSmall = size === "sm" || size === "xs";

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <div
        onClick={() => {
          number.isSelected = !number.isSelected;
          mutate(number);
        }}
        className={`${
          number.isSelected ? "bg-gray-200" : ""
        } flex items-center py-2 pl-3 pr-2 rounded-lg hover:bg-gray-100 text-gray-700 cursor-pointer text-sm border mb-2`}
      >
        <p className="text-sm mr-4">
          {number.isValid ? CHECK_ICON : CLOSE_ICON}
        </p>

        <p className="flex-grow w-10 truncate">
          {number.intlFormat}
          <br />
          <span className="ml-1 text-xs capitalize">
            {number.formattedNumberType}
          </span>
        </p>

        <Box sx={{ fontSize: "2em" }} className="mr-2">
          {number.region ? (
            <ReactCountryFlag countryCode={number.region} />
          ) : (
            <QuestionMarkIcon color="warning" />
          )}
        </Box>

        <IconButton onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
      </div>

      <ActionDrawer
        validationService={validationService}
        anchor={isSmall ? "bottom" : "right"}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

export default NumberRow;
