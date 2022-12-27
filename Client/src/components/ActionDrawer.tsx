import { DrawerProps, Drawer } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import { BaseComponentProps } from "../models/BaseComponentProps";
import ActionBtnsList, { ActionBtn } from "./ActionBtnsList";

export interface ActionDrawerProps extends BaseComponentProps, DrawerProps {}

const actionBtnList: ActionBtn[] = [
  {
    text: "Extra Information",
    icon: <InfoIcon color="primary" />,
    color: "primary",
  },

  {
    text: "Download CSV",
    icon: <DownloadIcon color="success" />,
    color: "green",
  },

  {
    text: "Delete",
    icon: <DeleteIcon color="error" />,
    color: "error",
  },
];

function ActionDrawer({
  validationService,
  ...drawerProps
}: ActionDrawerProps) {
  return (
    <Drawer {...drawerProps}>
      <ActionBtnsList
        btnList={actionBtnList}
        validationService={validationService}
      />
    </Drawer>
  );
}

export default ActionDrawer;
