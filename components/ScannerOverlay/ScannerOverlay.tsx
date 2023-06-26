import { View, StyleSheet, Dimensions } from "react-native";

type Props = {
  children: React.ReactElement;
};

const { width } = Dimensions.get("window");
const PADDING = 32;

const ScannerOverlay = ({ children }: Props) => (
  <View style={styles.cameraOverlay}>
    <View style={styles.cameraMaskBg}></View>
    <View style={styles.cameraMaskRow}>
      <View style={styles.cameraMaskBg} />
      <View style={styles.mask}>{children}</View>
      <View style={styles.cameraMaskBg} />
    </View>
    <View style={styles.cameraMaskBg} />
  </View>
);

export default ScannerOverlay;

const styles = StyleSheet.create({
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
    width: width - PADDING * 2,
    height: width - PADDING * 2 + 20,
    borderWidth: 4,
    borderRadius: 4,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
