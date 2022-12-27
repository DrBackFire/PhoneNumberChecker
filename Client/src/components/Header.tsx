import {
  Tooltip,
  Typography,
  IconButton,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material";

import InfoIcon from "@mui/icons-material/Info";
import SecurityIcon from "@mui/icons-material/Security";
import Form from "./Form";
import { BaseComponentProps } from "../models/BaseComponentProps";

export interface HeaderInputProps extends BaseComponentProps {}

function Header(props: HeaderInputProps) {
  return (
    <div className="bg-white sticky top-0 z-50">
      <AppBar color="inherit" position="sticky" className="py-2">
        <Toolbar>
          <Typography color="primary" variant="h6" noWrap>
            <SecurityIcon fontSize="large" />
            Number Validator
          </Typography>

          <Box style={{ flexGrow: 1 }}></Box>

          <Box>
            <Tooltip title="App Information">
              <IconButton color="primary">
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <Form {...props} />
      <section className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between ml-2 p-5 pb-3 sm:px-2 text-sm  text-gray-600">
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
      </section>
    </div>
  );
}
export default Header;
