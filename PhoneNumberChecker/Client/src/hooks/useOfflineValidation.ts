import { NumberValidationDTO } from "../models/NumberValidationDTO";
import { getFromStorage, setStorage } from "../helpers/LocalStorage";
import { useQueryClient } from "react-query";

export const useOfflineValidation = () => {
  const queryClient = useQueryClient();

  const setValidatedNumbers = (data: NumberValidationDTO, patch = false) => {
    let localData = getFromStorage<NumberValidationDTO[]>("VALIDATED_NUMBERS", [
      data,
    ]);

    if (!patch) {
      localData = !localData.includes(data) ? [data, ...localData] : localData;
    } else {
      localData = localData.map((x) => {
        if (x.id === data.id) {
          x = data;
        }

        return x;
      });
    }

    setStorage<NumberValidationDTO[]>("VALIDATED_NUMBERS", localData);

    queryClient.invalidateQueries(["VALIDATED_NUMBERS"]);
  };

  return {
    setValidatedNumbers,
  };
};
