import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { ReactNode } from "react";

import colors from "@/theme/colors";

type ScreenProps = {
  children: ReactNode;
  isScrollable?: boolean;
  style?: StyleProp<ViewStyle>;
};

const Screen = ({ children, isScrollable = true, style }: ScreenProps) => {
  if (isScrollable) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={style}>{children}</ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.navy["1.0"],
    flex: 1,
  },
});

export default Screen;
