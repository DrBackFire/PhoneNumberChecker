import { NumberValidationDTO } from "../models/NumberValidationDTO";
import { SupportedCountries } from "../models/SupportedCountries";
import { ValidationPayload } from "../models/ValidationPayload";
import { matchIsValidTel } from "mui-tel-input";
import { v4 as uuidv4 } from "uuid";
import { ValidationService } from "./ValidationService";
import axios, { AxiosError } from "axios";

const API_ROUTES = {
  COUNTRIES: "/get-supported-countries",
  VALIDATION: "/is-number-valid",
} as const;

/**
 * Get list of supported countries
 * @return {SupportedCountries[]} Array of supported countries
 */
export const fetchCountries = async () => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}${API_ROUTES.COUNTRIES}`
    );

    const data = (await res.json()) as SupportedCountries[];

    return data;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Get list of supported countries
 * @param {ValidationPayload} payload Country calling code and phone number
 * @return {NumberValidationDTO} Returns an object containing many properties including number intl. format
 */
export const validatePhoneNumber = async ({
  payload,
  onErrorCallback,
}: ValidationPayload) => {
  let data = new NumberValidationDTO();

  try {
    const res = await axios.post<NumberValidationDTO>(
      `${import.meta.env.VITE_API_URL}${API_ROUTES.VALIDATION}`,
      payload,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );

    data = await res.data;

    return data;
  } catch (error) {
    const err = error as AxiosError<string>;
    console.log(err.response?.data);
    // alert(JSON.stringify(error ?? ""));

    // offline validation
    if (onErrorCallback) data = onErrorCallback();

    return Promise.reject(err.response?.data);
  }
};
