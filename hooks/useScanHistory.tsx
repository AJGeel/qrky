import { useEffect, useState } from "react";
import { ScanHistoryItem } from "../app/history";
import { storageKeys } from "../services/storage/storageKeys";
import { getStorageData } from "../services/storage/getStorageData";

export const useScanHistory = () => {
  const [historyItems, setHistoryItems] = useState<ScanHistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const data = await getStorageData<ScanHistoryItem[]>(
          storageKeys["qrky/scan-history"]
        );

        if (!data) {
          setHistoryItems([]);
          return;
        }

        setHistoryItems(data);
      } catch (error) {
        console.error(error);
        setHistoryItems([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    historyItems,
    isLoading,
  };
};
