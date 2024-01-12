import { StyleSheet, View, Text } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { fonts } from "../theme/fonts";
import ScannerOverlay from "../components/ScannerOverlay";
import ItemModal from "../components/ItemModal";
import { useScanner } from "../hooks/useScanner";
import { useIsFocused } from "@react-navigation/native";
import { colors } from "../theme/colors";

const Index = () => {
  const {
    hasPermission,
    isScanned,
    scannedData,
    isModalVisible,
    handleCodeScanned,
    onCloseModal,
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
          onClose={onCloseModal}
          data={scannedData}
        />
        {isFocused && (
          <BarCodeScanner
            onBarCodeScanned={isScanned ? undefined : handleCodeScanned}
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
    backgroundColor: colors.blue.s900,
  },
  noPermissionContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  noPermissionText: {
    color: colors.white,
    fontFamily: fonts.bold,
  },
  ctaText: {
    color: colors.blue.s900,
    textAlign: "center",
    paddingVertical: 8,
    paddingHorizontal: 4,
    fontFamily: fonts.bold,
    backgroundColor: colors.white,
    width: "101%",
  },
});

export default Index;
