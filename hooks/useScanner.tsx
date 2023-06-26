import { BarCodeScanner } from "expo-barcode-scanner";
import { useEffect, useState } from "react";

type BarCodeScannerResult = {
  data: string;
  type: string;
};

export const useScanner = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState<string>();
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const getPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();

      setHasPermission(status === "granted");
    };

    getPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: BarCodeScannerResult) => {
    setScanned(true);
    setScannedData(data);
    setModalVisible(true);

    console.log(
      `🤖 DEBUG: Scanned code with type '${type}' and data '${data}'`
    );
  };

  const handleReset = () => {
    setScanned(false);
    setScannedData(undefined);
    setModalVisible(false);
  };

  return {
    hasPermission,
    setHasPermission,
    scanned,
    setScanned,
    scannedData,
    setScannedData,
    isModalVisible,
    setModalVisible,
    handleBarCodeScanned,
    handleReset,
  };
};
