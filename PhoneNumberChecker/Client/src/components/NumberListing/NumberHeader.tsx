import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import useLocalState from "../../hooks/useLocalState";
import { BaseComponentProps } from "../../models/BaseComponentProps";
import { NumberValidationDTO } from "../../models/NumberValidationDTO";
import ActionDrawer from "../ActionDrawer";
import { ActionBtn } from "../ActionDrawer/ActionBtnRow";
import DownloadIcon from "@mui/icons-material/Download";
import { CsvHelper } from "../../helpers/Csv";

interface NumberHeaderProp extends BaseComponentProps {}

function NumberHeader({ validationService }: NumberHeaderProp) {
  const [actionBtnList, setActionBtnList] = useState<ActionBtn[]>([]);
  const [actionDrawerOpen, setActionDrawerOpen] = useState(false);

  const { data = [] } = useLocalState<NumberValidationDTO[]>(
    "VALIDATED_NUMBERS",
    []
  );

  const download = (val: NumberValidationDTO[]) =>
    CsvHelper.Download(val, {
      excludeProperties: ["id", "isSelected"],
    });

  const handleClick = () => {
    const selected = data.filter((x) => x.isSelected);
    setActionBtnList([
      {
        text: `Download Selected as CSV (${selected.length})`,
        icon: <DownloadIcon />,
        disabled: !data.some(
          (x) => x.isSelected
        ) /** Disable when no rows are selected */,
        onClick: () => {
          download(selected);
        },
      },

      {
        text: "Download all as CSV",
        icon: <DownloadIcon color="success" />,
        color: "green",
        disabled: !data.length,
        onClick: () => {
          download(data);
        },
      },
    ]);

    setActionDrawerOpen(true);
  };

  return (
    <>
      <section className="max-w-3xl mx-auto border-b">
        <div className="flex items-center justify-between ml-2 px-5 py-3 sm:px-2 text-sm  text-gray-600">
          <p className="font-medium mr-3 text-center">Valid</p>
          <h2 className="font-medium flex-grow mr-4">Number</h2>
          <div className="mr-3">
            <Tooltip title="More">
              <IconButton onClick={handleClick} size="small">
                <MoreVertIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </section>

      <ActionDrawer
        actionBtnList={actionBtnList}
        validationService={validationService}
        open={actionDrawerOpen}
        onClose={() => setActionDrawerOpen(false)}
      />
    </>
  );
}

export default NumberHeader;
