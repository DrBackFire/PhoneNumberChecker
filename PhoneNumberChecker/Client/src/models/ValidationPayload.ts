import { NumberValidationDTO } from "./NumberValidationDTO";

export interface ValidationPayload {
  payload: {
    countryCode: number;
    phoneNumber: number;
  };
  /**
   * Offline validation
   * @returns Object containing many properties including number intl. format
   */
  onErrorCallback?: () => NumberValidationDTO;
}
