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

export interface NumberValidationDTO {
  id: string;
  phoneNumber: number;
  intlFormat: string | null;
  isValid: boolean;
  isPossible: boolean;
  numberType: PhoneNumberType;
  region: string | null;
  formattedNumberType: string;
  isSelected: boolean;
}
