import { useQuery } from "react-query";
import { getFromStorage } from "../helpers/LocalStorage";
import { StorageKeys } from "../models/StorageKeys";

const useLocalState = <T>(key: StorageKeys, initialValue: T) =>
  useQuery(key, async () => getFromStorage(key, initialValue));

export default useLocalState;
