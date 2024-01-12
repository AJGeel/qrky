import { BarCodeScanner, PermissionStatus } from "expo-barcode-scanner";
import { useEffect, useState } from "react";
import { addToHistory } from "../services/history/addToHistory";

type CodeScannerResult = {
  data: string;
  type: string;
};

export const useScanner = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [isScanned, setIsScanned] = useState(false);
  const [scannedData, setScannedData] = useState<string>();
  const [isModalVisible, setModalVisible] = useState(false);

  const handleCodeScanned = async ({ type, data }: CodeScannerResult) => {
    setIsScanned(true);
    setScannedData(data);
    setModalVisible(true);

    await addToHistory({ data, type, scannedAt: new Date() });
  };

  const handleReset = () => {
    setIsScanned(false);
    setScannedData(undefined);
    setModalVisible(false);
  };

  useEffect(() => {
    if (hasPermission) {
      return;
    }

    const getPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();

      setHasPermission(status === PermissionStatus.GRANTED);
    };

    getPermissions();
  }, []);

  return {
    hasPermission,
    setHasPermission,
    isScanned,
    setIsScanned,
    scannedData,
    setScannedData,
    isModalVisible,
    setModalVisible,
    handleCodeScanned,
    handleReset,
  };
};
