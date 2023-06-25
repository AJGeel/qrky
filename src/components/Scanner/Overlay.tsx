import { View, StyleSheet, Text, Dimensions } from "react-native";
import { fonts } from "../../theme/fonts";
import LinkButton from "./LinkButton";
import { loadInBrowser } from "../../utils/loadInBrowser";

type Props = {
  data?: string;
};

const { width } = Dimensions.get("window");
const PADDING = 32;

const Overlay = ({ data }: Props) => (
  <View style={styles.cameraOverlay}>
    <View style={styles.cameraMaskBg}></View>
    <View style={styles.cameraMaskRow}>
      <View style={styles.cameraMaskBg} />
      <View style={styles.mask}>
        {!!data ? (
          <LinkButton url={data} onPress={() => loadInBrowser(data)} />
        ) : (
          <Text style={styles.text}>Scan a QR 👀</Text>
        )}
      </View>
      <View style={styles.cameraMaskBg} />
    </View>
    <View style={styles.cameraMaskBg} />
  </View>
);

export default Overlay;

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
  text: {
    color: "rgba(6,18,58,1)",
    textAlign: "center",
    paddingVertical: 8,
    paddingHorizontal: 4,
    fontFamily: fonts.bold,
    backgroundColor: "white",
    width: "101%",
  },
});
