import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import { fonts } from "../../theme/fonts";

type Props = {
  onPress: () => void;
  label: string;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<ViewStyle>;
};

const Button = ({ onPress, label, containerStyle, labelStyle }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}
      activeOpacity={0.5}
    >
      <Text style={[styles.label, labelStyle]}>{label}</Text>
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
