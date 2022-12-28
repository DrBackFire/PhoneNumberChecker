import { List, ListItem } from "@mui/material";
import { BaseComponentProps } from "../../models/BaseComponentProps";
import ActionBtnRow, { ActionBtn } from "./ActionBtnRow";

export interface ActionBtnsListProps extends BaseComponentProps {
  btnList: ActionBtn[];
}

function ActionBtnsList({ btnList }: ActionBtnsListProps) {
  return (
    <List>
      {btnList?.map((btnProps, i) => (
        <ListItem key={i} disablePadding>
          <ActionBtnRow {...btnProps} />
        </ListItem>
      ))}
    </List>
  );
}

export default ActionBtnsList;
