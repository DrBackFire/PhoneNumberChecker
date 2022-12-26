import { Popover, Typography, PopoverProps } from "@mui/material";
import { BaseComponentProps } from "../models/BaseComponentProps";

export interface ContextMenuProps extends PopoverProps {}

function ContextMenu(props: ContextMenuProps) {
  return (
    <Popover {...props}>
      <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
    </Popover>
  );
}

export default ContextMenu;
