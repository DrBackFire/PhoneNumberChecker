import {
  ListItemIcon,
  ListItemText,
  ListItemButton,
  ListItemButtonProps,
} from "@mui/material";

export interface ActionBtn {
  text: string;
  icon: JSX.Element;
  disabled?: boolean;
  color?: "primary" | "green" | "error";
  onClick?: ListItemButtonProps["onClick"];
}

export interface ActionBtnRowProps extends ActionBtn {}

function ActionBtnRow({
  icon,
  color,
  text,
  disabled,
  onClick,
}: ActionBtnRowProps) {
  return (
    <ListItemButton disabled={disabled} onClick={onClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText
        primaryTypographyProps={{
          color,
          fontWeight: "medium",
        }}
        primary={text}
      />
    </ListItemButton>
  );
}

export default ActionBtnRow;
