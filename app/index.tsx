import { StyleSheet, View, Text } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { fonts } from "../theme/fonts";
import ScannerOverlay from "../components/ScannerOverlay";
import ItemModal from "../components/ItemModal";
import { useScanner } from "../hooks/useScanner";
import { useIsFocused } from "@react-navigation/native";

const Index = () => {
  const {
    hasPermission,
    scanned,
    scannedData,
    isModalVisible,
    handleBarCodeScanned,
    handleReset,
  } = useScanner();
  const isFocused = useIsFocused();

  if (hasPermission === false) {
    return (
      <View style={styles.noPermissionContainer}>
        <Text style={styles.noPermissionText}>Loading...</Text>
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <ItemModal
          isVisible={isModalVisible}
          onClose={handleReset}
          data={scannedData}
        />
        {isFocused && (
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          >
            <ScannerOverlay>
              <Text style={styles.ctaText}>🔍 Scan a QR or Barcode 🔎</Text>
            </ScannerOverlay>
          </BarCodeScanner>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(6,18,58,1)",
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

export default Index;
