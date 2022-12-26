import { StorageKeys } from "../models/StorageKeys";

const getFromStorage = <T>(key: StorageKeys, initialValue: T) => {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  if (typeof window === "undefined") {
    return initialValue;
  }

  try {
    // Get from local storage by key
    const item = window.localStorage.getItem(key);
    // Parse stored json or if none return initialValue
    return (item ? JSON.parse(item) : initialValue) as T;
  } catch (error) {
    // If error also return initialValue
    console.log(error);
    return initialValue;
  }
};

const setStorage = <T>(key: StorageKeys, valueToStore: T) => {
  try {
    // Save to local storage
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    }
  } catch (error) {
    // A more advanced implementation would handle the error case
    console.log(error);
  }
};

export { getFromStorage, setStorage };
