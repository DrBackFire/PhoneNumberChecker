import { Box, IconButton, Tooltip } from "@mui/material";
import { BaseComponentProps } from "../../models/BaseComponentProps";
import ReactCountryFlag from "react-country-flag";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { NumberValidationDTO } from "../../models/NumberValidationDTO";
import DownloadIcon from "@mui/icons-material/Download";
import { CsvHelper } from "../../helpers/Csv";
import { useOfflineValidation } from "../../hooks/useOfflineValidation";

const CHECK_ICON = <CheckIcon color="success" />;
const CLOSE_ICON = <CloseIcon color="error" />;

interface NumberRowProp extends BaseComponentProps {
  number: NumberValidationDTO;
}

function NumberRow({ number }: NumberRowProp) {
  const { setValidatedNumbers } = useOfflineValidation();

  const handleClick = () => {
    CsvHelper.Download(number, {
      excludeProperties: ["id", "isSelected"],
    });
  };

  return (
    <div
      onClick={() => {
        number.isSelected = !number.isSelected;
        setValidatedNumbers(number, true);
      }}
      className={`${
        number.isSelected ? "bg-gray-200" : ""
      } flex items-center py-2 pl-3 pr-2 rounded-lg hover:bg-gray-100 text-gray-700 cursor-pointer text-sm border mb-2`}
    >
      <p className="text-sm mr-4">{number.isValid ? CHECK_ICON : CLOSE_ICON}</p>

      <p className="flex-grow w-10 truncate">
        {number.intlFormat}
        <br />
        <span className="ml-1 text-xs capitalize">
          {number.formattedNumberType}
        </span>
      </p>

      <Box sx={{ fontSize: "2em" }} className="mr-2">
        {number.region ? (
          <ReactCountryFlag countryCode={number.region} />
        ) : (
          <QuestionMarkIcon color="warning" />
        )}
      </Box>

      <Tooltip title="Download CSV">
        <IconButton onClick={handleClick}>
          <DownloadIcon color="primary" />
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default NumberRow;
