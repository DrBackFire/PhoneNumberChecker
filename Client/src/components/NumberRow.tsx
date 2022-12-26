import MoreVertIcon from "@mui/icons-material/MoreVert";
import InboxIcon from "@mui/icons-material/Inbox";
import DownloadIcon from "@mui/icons-material/Download";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
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
import ContextMenu from "./ContextMenu";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const CHECK_ICON = <CheckIcon color="success" />;
const CLOSE_ICON = <CloseIcon color="error" />;

interface NumberListingProp extends BaseComponentProps {
  number: NumberValidationDTO;
}

function NumberRow({ number, validationService }: NumberListingProp) {
  const { mutate } = useMutation<
    NumberValidationDTO,
    unknown,
    NumberValidationDTO,
    unknown
  >("updateValidatedNumbers");

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div
      onClick={() => {
        number.isSelected = !number.isSelected;
        mutate(number);
      }}
      className={`${
        number.isSelected ? "bg-gray-200" : ""
      } flex items-center py-2 pl-3 pr-2 rounded-lg hover:bg-gray-100 text-gray-700 cursor-pointer text-sm border mb-2`}
    >
      <p className="text-sm mr-4">{number.isValid ? CHECK_ICON : CLOSE_ICON}</p>

      <p className="flex-grow w-10 truncate">
        {number.intlFormat}
        <br />
        <span className="ml-1 text-xs">{number.formattedNumberType}</span>
      </p>

      <Box sx={{ fontSize: "2em" }} className="mr-2">
        {number.region ? (
          <ReactCountryFlag countryCode={number.region} />
        ) : (
          <QuestionMarkIcon color="warning" />
        )}
      </Box>

      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="z-50"
      >
        <MoreVertIcon />
      </IconButton>

      <Drawer anchor={"bottom"} open={open} onClose={() => setOpen(false)}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InfoIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  color: "primary",
                  fontWeight: "medium",
                }}
                primary={"Extra Information"}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DownloadIcon color="success" />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  color: "green",
                  fontWeight: "medium",
                }}
                primary={"Download CSV"}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DeleteIcon color="error" />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  color: "error",
                  fontWeight: "medium",
                }}
                primary={"Delete"}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default NumberRow;
