import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { fonts } from "../../theme/fonts";

type Props = {
  onPress: () => void;
  label: string;
};

const Button = ({ onPress, label }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.5}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  label: {
    fontSize: 14,
    color: "rgba(6,18,58,1)",
    textAlign: "center",
    fontFamily: fonts.bold,
  },
});
