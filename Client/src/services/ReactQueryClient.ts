import { QueryClient } from "react-query";
import { getFromStorage, setStorage } from "../helpers/localStorage";
import { NumberValidationDTO } from "../models/NumberValidationDTO";
import { validatePhoneNumber } from "./Api";

const queryClient = new QueryClient();

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

// Define the "validatePhoneNumber" mutation
queryClient.setMutationDefaults("validatePhoneNumber", {
  mutationFn: validatePhoneNumber,
  onSuccess: (data) => {
    setValidatedNumbers(data);
  },
  retry: 3,
});

queryClient.setMutationDefaults("updateValidatedNumbers", {
  mutationFn: async (data) => {
    setValidatedNumbers(data, true);
  },
});

export default queryClient;
