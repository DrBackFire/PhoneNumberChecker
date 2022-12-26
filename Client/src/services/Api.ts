import { NumberValidationDTO } from "../models/NumberValidationDTO";
import { SupportedCountries } from "../models/SupportedCountries";
import { ValidationPayload } from "../models/ValidationPayload";

const API_ROUTES = {
  COUNTRIES: "/get-supported-countries",
  VALIDATION: "/is-number-valid",
} as const;

/** VITE env https://vitejs.dev/guide/env-and-mode.html */

export const fetchCountries = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}${API_ROUTES.COUNTRIES}`
  );

  const data = (await res.json()) as SupportedCountries[];

  return data;
};

export const validatePhoneNumber = async (payload: ValidationPayload) => {
  // try {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}${API_ROUTES.VALIDATION}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  const data = (await res.json()) as NumberValidationDTO;

  return data;
  // } catch (error) {
  //   // offline validation
  // } finally {
  //   // do sometime to local store
  // }
};
