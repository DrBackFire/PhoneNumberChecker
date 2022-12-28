import { NumberValidationDTO } from "../models/NumberValidationDTO";
import { SupportedCountries } from "../models/SupportedCountries";
import { ValidationPayload } from "../models/ValidationPayload";
import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: "/api/PhoneNumber",
});

const API_ROUTES = {
  COUNTRIES: "/get-supported-countries",
  VALIDATION: "/is-number-valid",
} as const;

/**
 *
 * @returns Array of supported countries
 */
export const fetchCountries = async () => {
  try {
    const res = await api.get<SupportedCountries[]>(API_ROUTES.COUNTRIES);

    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

/**
 * Get list of supported countries
 * @param payload Country calling code and phone number
 * @returns  Returns an object containing many properties including number intl. format
 */
export const validatePhoneNumber = async ({
  payload,
  onErrorCallback,
}: ValidationPayload) => {
  let data = new NumberValidationDTO();

  try {
    const res = await api.post<NumberValidationDTO>(
      API_ROUTES.VALIDATION,
      payload,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }
    );

    data = await res.data;

    return data;
  } catch (error) {
    console.log(error);
    const err = error as AxiosError<string>;

    // offline validation
    if (onErrorCallback) data = onErrorCallback();

    if (data) {
      return data;
    } else {
      return Promise.reject(err.response?.data);
    }
  }
};
