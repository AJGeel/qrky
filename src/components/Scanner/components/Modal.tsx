import {
  StyleSheet,
  View,
  Text,
  Modal as RNModal,
  TouchableOpacity,
} from "react-native";
import Button from "../../Button";
import { loadInBrowser } from "../../../utils/loadInBrowser";
import { fonts } from "../../../theme/fonts";

type Props = {
  isVisible: boolean;
  onClose: () => void;
  data?: string;
};

const Modal = ({ isVisible, onClose, data }: Props) => {
  const onCopy = () => {
    console.log("todo");
  };

  const onOpen = () => {
    if (!data) {
      return;
    }

    loadInBrowser(data);
  };

  return (
    <RNModal
      animationType="fade"
      transparent
      visible={isVisible}
      onRequestClose={onClose}
    >
      <TouchableOpacity onPress={onClose} style={styles.backdrop} />
      <View style={styles.container}>
        <Text style={styles.header}>You scanned: 👀</Text>
        <Text style={styles.label}>{data}</Text>
        <Button
          label="Copy URL"
          onPress={onCopy}
          containerStyle={styles.buttonStyle}
        />
        <Button
          label="Open URL"
          onPress={onOpen}
          containerStyle={styles.buttonStyle}
        />
      </View>
    </RNModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "rgba(0,0,0,.4)",
    minHeight: "60%",
    flexGrow: 1,
  },
  container: {
    backgroundColor: "white",
    padding: 32,
  },
  buttonStyle: {
    marginTop: 6,
    paddingVertical: 16,
    backgroundColor: "rgba(6,18,58,.1)",
  },
  header: {
    fontFamily: fonts.bold,
    marginBottom: 6,
  },
  label: {
    marginBottom: 12,
    fontFamily: fonts.regular,
    fontSize: 12,
  },
});
