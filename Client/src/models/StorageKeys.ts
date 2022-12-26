import { ObjectValues } from "./types";

const STORAGE_KEYS = {
  COUNTRIES: "COUNTRIES",
  VALIDATED_NUMBERS: "VALIDATED_NUMBERS",
} as const;

export type StorageKeys = ObjectValues<typeof STORAGE_KEYS>;
