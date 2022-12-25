const API_ROUTES = {
  COUNTRIES: "/get-supported-countries",
  VALIDATION: "",
} as const;

/** VITE env https://vitejs.dev/guide/env-and-mode.html */

export const fetchCountries = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}${API_ROUTES.COUNTRIES}`
  );

  const data = await res.json();

  return data;
};

export const validatePhoneNumber = async () => {
  try {
  } catch (error) {
    // offline validation
  } finally {
    // do sometime to local store
  }
};
