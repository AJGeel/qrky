import { getStorageData } from "../storage/getStorageData";
import { setStorageData } from "../storage/setStorageData";
import { storageKeys } from "../storage/storageKeys";
import { ScanHistoryItem } from "./types";

export const addToHistory = async (newItem: ScanHistoryItem) => {
  const existingItems = await getStorageData<ScanHistoryItem[]>(
    storageKeys["qrky/scan-history"]
  );

  if (!existingItems) {
    await setStorageData(storageKeys["qrky/scan-history"], [newItem]);
    return;
  }

  const filteredItems = existingItems.filter(
    (item) => item.data !== newItem.data
  );

  const newState: ScanHistoryItem[] = [...filteredItems, newItem];

  await setStorageData(storageKeys["qrky/scan-history"], newState);
};
