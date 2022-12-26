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
    <div className="bg-white sticky top-0">
      <AppBar color="transparent" position="sticky" className="py-2 z-50">
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
    </div>
  );
}
export default Header;
