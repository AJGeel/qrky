import { Text as RNText, StyleProp, StyleSheet, TextStyle } from "react-native";
import colors from "@/theme/colors";
import { ReactNode } from "react";
import { fonts } from "@/theme";

type TextProps = {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
};

const Text = ({ children, style }: TextProps) => {
  return <RNText style={[styles.default, style]}>{children}</RNText>;
};

const styles = StyleSheet.create({
  default: {
    color: colors.white["1.0"],
    fontFamily: fonts.regular,
    fontSize: 14,
    lineHeight: 14 * 1.5,
  },
});

export default Text;
