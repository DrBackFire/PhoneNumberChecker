import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { BaseComponentProps } from "../models/BaseComponentProps";

export interface ActionBtn {
  text: string;
  icon: JSX.Element;
  color: "primary" | "green" | "error";
}

export interface ActionBtnsListProps extends BaseComponentProps {
  btnList: ActionBtn[];
}

function ActionBtnsList({ btnList }: ActionBtnsListProps) {
  return (
    <List>
      {btnList?.map(({ text, icon, color }, i) => (
        <ListItem key={i} disablePadding>
          <ListItemButton>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                color,
                fontWeight: "medium",
              }}
              primary={text}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default ActionBtnsList;
