import { StyleSheet, View, Text } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useEffect, useState } from "react";
import Overlay from "./Overlay";
import Button from "../Button";
import { fonts } from "../../theme/fonts";

type BarCodeScannerResult = {
  data: string;
  type: string;
};

const QRCamera = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState<string>();

  useEffect(() => {
    const getPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }: BarCodeScannerResult) => {
    setScanned(true);
    setData(data);

    console.log(
      `🤖 DEBUG: Scanned code with type '${type}' and data '${data}'`
    );
  };

  const handleReset = () => {
    setScanned(false), setData(undefined);
  };

  if (hasPermission === null) {
    return (
      <View style={styles.noPermissionContainer}>
        <Text style={styles.noPermissionText}>
          Requesting camera permission...
        </Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.noPermissionContainer}>
        <Text style={styles.noPermissionText}>No camera permission...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      >
        <Overlay data={data} />
      </BarCodeScanner>
      {scanned && (
        <View style={styles.resetButtonContainer}>
          <Button label="Scan another code" onPress={handleReset} />
        </View>
      )}
    </View>
  );
};

export default QRCamera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resetButtonContainer: {
    position: "absolute",
    bottom: 64,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  noPermissionContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  noPermissionText: {
    color: "white",
    fontFamily: fonts.bold,
  },
});
