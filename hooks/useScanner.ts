import { debug } from "@/utils/debug";
import { BarcodeScanningResult, useCameraPermissions } from "expo-camera/next";
import { useState } from "react";

export const useBarcodeScanner = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [isScanning, setIsScanning] = useState(true);
  const [data, setData] = useState<string>();
  const [isModalVisible, setIsModalVisible] = useState(false);

  requestPermission();

  const handleBarcodeScanned = (result: BarcodeScanningResult) => {
    debug(result);

    setIsScanning(false);
    setData(result.data);
    setIsModalVisible(true);
  };

  const handleReset = () => {
    setIsScanning(true);
    setData(undefined);
    setIsModalVisible(false);
  };

  return {
    state: {
      cameraPermission: permission,
      isScanning,
      data: data,
      isModalVisible,
    },
    functions: {
      handleBarcodeScanned,
      handleReset,
    },
  };
};
