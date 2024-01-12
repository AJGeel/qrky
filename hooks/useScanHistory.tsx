import { useEffect, useState } from "react";
import { storageKeys } from "../services/storage/storageKeys";
import { getStorageData } from "../services/storage/getStorageData";
import { ScanHistoryItem } from "../services/history/types";
import { useIsFocused } from "@react-navigation/native";

export const useScanHistory = () => {
  const [historyItems, setHistoryItems] = useState<ScanHistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused) {
      return;
    }

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
  }, [isFocused]);

  return {
    historyItems,
    isLoading,
  };
};
