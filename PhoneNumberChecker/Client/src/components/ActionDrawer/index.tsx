import { DrawerProps, Drawer } from "@mui/material";
import { BaseComponentProps } from "../../models/BaseComponentProps";
import ActionBtnsList from "./ActionBtnsList";
import { ActionBtn } from "./ActionBtnRow";
import useBreakpoint from "../../hooks/useBreakpoint";

export interface ActionDrawerProps extends BaseComponentProps, DrawerProps {
  actionBtnList: ActionBtn[];
}

function ActionDrawer({
  validationService,
  actionBtnList,
  ...drawerProps
}: ActionDrawerProps) {
  const size = useBreakpoint();

  const isSmall = size === "sm" || size === "xs";

  return (
    <Drawer anchor={isSmall ? "bottom" : "right"} {...drawerProps}>
      <ActionBtnsList
        btnList={actionBtnList}
        validationService={validationService}
      />
    </Drawer>
  );
}

export default ActionDrawer;
