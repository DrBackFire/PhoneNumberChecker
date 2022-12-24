import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";
import SecurityIcon from "@mui/icons-material/Security";

function Header() {
  return (
    <AppBar color="transparent" position="sticky" className="py-2 z-50">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography color="primary" variant="h6" noWrap>
            <SecurityIcon fontSize="large" />
            Number Checker
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
      </Container>
    </AppBar>
  );
}
export default Header;
