import { useQuery } from "react-query";
import { getFromStorage } from "../helpers/localStorage";
import { StorageKeys } from "../models/StorageKeys";

const useLocalState = <T>(key: StorageKeys, initialValue: T) =>
  useQuery(key, async () => getFromStorage(key, initialValue));

export default useLocalState;
