import colors from "@/theme/colors";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import Text from "../Text";

type ButtonProps = TouchableOpacityProps & {
  label: string;
  onPress: () => void;
};

const Button = ({ label, onPress, ...props }: ButtonProps) => (
  <TouchableOpacity
    {...props}
    onPress={onPress}
    activeOpacity={0.6}
    style={styles.container}
  >
    <Text>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.navy["1.0"],
  },
});

export default Button;
