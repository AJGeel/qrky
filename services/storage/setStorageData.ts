import AsyncStorage from "@react-native-async-storage/async-storage";
import { storageKeys } from "./storageKeys";

export const setStorageData = async (
  key: keyof typeof storageKeys,
  value: string | unknown
): Promise<boolean> => {
  try {
    const processedValue =
      typeof value === "string" ? value : JSON.stringify(value);

    await AsyncStorage.setItem(key, processedValue);

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
