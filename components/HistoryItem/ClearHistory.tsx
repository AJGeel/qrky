import { View, StyleSheet, Text, Pressable } from "react-native";
import { fonts } from "../../theme/fonts";
import { colors } from "../../theme/colors";
import { Ionicons } from "@expo/vector-icons";

const ClearHistory = () => (
  <View style={styles.container}>
    <Pressable
      style={({ pressed }) => [
        styles.buttonContainer,
        pressed && styles.buttonContainerPressed,
      ]}
    >
      <Text style={styles.buttonText}>Clear scan history</Text>
      <Ionicons
        name="trash"
        size={16}
        color={colors.white}
        style={styles.icon}
      />
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: "flex-start",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
    borderWidth: 2,
    borderRadius: 1337,
    borderColor: "rgba(255,255,255,.4)",
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainerPressed: {
    opacity: 0.5,
  },
  buttonText: {
    fontFamily: fonts.regular,
    color: colors.white,
    fontSize: 16,
  },
  icon: {
    opacity: 0.4,
  },
});

export default ClearHistory;
