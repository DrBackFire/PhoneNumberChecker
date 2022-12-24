import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Box,
  DialogContent,
  Input,
} from "@mui/material";
import { useEffect, useState } from "react";
import { SupportedCountries } from "../models/SupportedCountries";
import axios from "axios";
import ReactCountryFlag from "react-country-flag";

export interface CountryDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function CountryDialog(props: CountryDialogProps) {
  const { onClose, selectedValue, open } = props;

  const [countries, setCountries] = useState<SupportedCountries[]>([]);

  const fetchCountries = async () => {
    const res = await axios.get<SupportedCountries[]>(
      "http://localhost:5144/api/PhoneNumber/get-supported-countries"
    );

    if (res.status === 200) {
      setCountries(res.data);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>
        Select a country
        <Input />
      </DialogTitle>
      <DialogContent dividers>
        <List>
          {countries.map((c) => (
            <ListItem
              divider
              key={c.countryCode}
              onClick={() => handleListItemClick("addAccount")}
            >
              <ListItemAvatar>
                {/* <Avatar> */}
                <ReactCountryFlag
                  style={{
                    fontSize: "2em",
                  }}
                  countryCode={c.region ?? ""}
                />
                {/* </Avatar> */}
              </ListItemAvatar>
              <ListItemText primary={`${c.countryName} (${c.countryCode})`} />
            </ListItem>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
}

export default CountryDialog;
