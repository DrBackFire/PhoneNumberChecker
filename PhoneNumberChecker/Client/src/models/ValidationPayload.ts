import { NumberValidationDTO } from "./NumberValidationDTO";

export interface ValidationPayload {
  payload: {
    countryCode: number;
    phoneNumber: number;
  };
  onErrorCallback?: () => NumberValidationDTO;
}
