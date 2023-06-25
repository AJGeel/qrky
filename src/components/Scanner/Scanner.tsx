import { Camera, CameraType } from "expo-camera";
import { StyleSheet, View, Text } from "react-native";
import { fonts } from "../../theme/fonts";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useEffect, useState } from "react";

const QRCamera = () => {
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (!hasPermission) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Camera
      style={styles.camera}
      type={CameraType.back}
      barCodeScannerSettings={{
        barCodeTypes: [BarCodeScanner.Constants.BarCodeType.QR],
      }}
      ratio="16:9"
    >
      <View style={styles.cameraOverlay}>
        <View style={styles.cameraMaskBg}></View>
        <View style={styles.cameraMaskRow}>
          <View style={styles.cameraMaskBg} />
          <View style={styles.mask}>
            <Text style={styles.text}>Scan a QR</Text>
          </View>
          <View style={styles.cameraMaskBg} />
        </View>
        <View style={styles.cameraMaskBg} />
      </View>
    </Camera>
  );
};

export default QRCamera;

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  cameraOverlay: {
    flex: 1,
  },
  cameraMaskRow: {
    flexDirection: "row",
  },
  cameraMaskBg: {
    backgroundColor: "rgba(6,18,58,.5)",
    flex: 1,
  },
  mask: {
    width: 300,
    height: 300,
    borderWidth: 4,
    borderRadius: 4,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  text: {
    color: "rgba(6,18,58,1)",
    textAlign: "center",
    paddingVertical: 8,
    fontFamily: fonts.bold,
    backgroundColor: "white",
    width: "100%",
    borderWidth: 1,
    borderColor: "white",
  },
});
