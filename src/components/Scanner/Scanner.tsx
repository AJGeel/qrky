import { StyleSheet, View, Text } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useEffect, useState } from "react";
import Overlay from "./components/Overlay";
import { fonts } from "../../theme/fonts";
import Modal from "./components/Modal";

type BarCodeScannerResult = {
  data: string;
  type: string;
};

const QRCamera = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState<string>();
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
    setData(data);
    setModalVisible(true);

    console.log(
      `🤖 DEBUG: Scanned code with type '${type}' and data '${data}'`
    );
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
      <Modal
        isVisible={isModalVisible}
        onClose={() => {
          setScanned(false), setData(undefined), setModalVisible(false);
        }}
        data={data}
      />
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      >
        <Overlay>
          <Text style={styles.ctaText}>🔍 Scan a QR / Barcode 🔎</Text>
        </Overlay>
      </BarCodeScanner>
    </View>
  );
};

export default QRCamera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  ctaText: {
    color: "rgba(6,18,58,1)",
    textAlign: "center",
    paddingVertical: 8,
    paddingHorizontal: 4,
    fontFamily: fonts.bold,
    backgroundColor: "white",
    width: "101%",
  },
});
