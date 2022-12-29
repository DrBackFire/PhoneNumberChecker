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
import NumberHeader from "./NumberListing/NumberHeader";

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
        </Toolbar>
      </AppBar>
      <Form {...props} />

      <NumberHeader {...props} />
    </div>
  );
}
export default Header;
