import AsyncStorage from "@react-native-async-storage/async-storage";
import { storageKeys } from "./storageKeys";

export const getStorageData = async <T>(
  key: keyof typeof storageKeys
): Promise<T | null> => {
  try {
    const result = await AsyncStorage.getItem(key);
    return result != null ? JSON.parse(result) : null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
