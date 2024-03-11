import {
  BarcodeScanningResult,
  CameraView,
  useCameraPermissions,
} from "expo-camera/next";
import Screen from "@/components/Screen";
import { useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { debug } from "@/utils/debug";
import { useBarcodeScanner } from "@/hooks/useScanner";
import colors from "@/theme/colors";
import Text from "@/components/Text";

// TODO: useIsFocused. Only render camera if focused.

const Page = () => {
  const { state, functions } = useBarcodeScanner();

  if (!state.cameraPermission) {
    debug("No permissions yet.");
  }

  if (!state.cameraPermission?.granted) {
    debug("No permissions granted yet.");
  }

  return (
    <Screen isScrollable={false}>
      <CameraView
        style={styles.cameraContainer}
        onBarcodeScanned={
          state.isScanning ? functions.handleBarcodeScanned : undefined
        }
      >
        <Modal
          animationType="fade"
          transparent
          visible={state.isModalVisible}
          onRequestClose={functions.handleReset}
        >
          <TouchableOpacity
            onPress={functions.handleReset}
            style={styles.modalBackdrop}
          />
          <View style={styles.modalContainer}>
            <Text>You scanned:</Text>
            <Text>{state.data}</Text>
            <Button title="Copy to Clipboard" />
            <Button title="Open URL" />
          </View>
        </Modal>
      </CameraView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: colors.navy["0.1"],
    minHeight: "60%",
  },
  modalContainer: {
    backgroundColor: colors.white["1.0"],
    padding: 32,
  },
});

export default Page;
