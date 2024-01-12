import { ActivityIndicator, View, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

const LoadingScreen = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={colors.white} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue.s900,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoadingScreen;
