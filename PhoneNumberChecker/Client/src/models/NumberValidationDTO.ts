import { NumberType } from "libphonenumber-js";

export enum PhoneNumberType {
  FIXED_LINE = 0,
  MOBILE = 1,
  FIXED_LINE_OR_MOBILE = 2,
  TOLL_FREE = 3,
  PREMIUM_RATE = 4,
  SHARED_COST = 5,
  VOIP = 6,
  PERSONAL_NUMBER = 7,
  PAGER = 8,
  UAN = 9,
  VOICEMAIL = 10,
  UNKNOWN = 11,
}

export class NumberValidationDTO {
  id: string = "";
  phoneNumber: number = 0;
  intlFormat: string | null = null;
  isValid: boolean = false;
  isPossible: boolean = false;
  numberType: PhoneNumberType | NumberType = PhoneNumberType.UNKNOWN ?? "UAN";
  region: string | null = null;
  formattedNumberType: string = "";
  isSelected: boolean = false;

  constructor() {}
}
