import { Alert, View, StyleSheet, Text, Pressable } from "react-native";
import { colors } from "../../theme/colors";
import { fonts } from "../../theme/fonts";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScanHistoryItem } from "../../services/history/types";
import { formatDistanceToNow } from "date-fns";

type HistoryItemProps = Pick<ScanHistoryItem, "data" | "scannedAt"> & {
  onPressBody: () => void;
};

const HistoryItem = ({ data, scannedAt, onPressBody }: HistoryItemProps) => {
  const onPressDelete = () => {
    Alert.alert(
      "Heads up",
      "Do you want to delete this?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Phew. That was a close call."),
          style: "cancel",
        },
        {
          text: "Delete it!",
          onPress: () => console.log("Todo: delete."),
          style: "destructive",
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.mainItem} onPress={onPressBody}>
        <Text numberOfLines={1} style={styles.nameText}>
          {data}
        </Text>
        <Text style={styles.dateText}>
          {formatDistanceToNow(scannedAt, { addSuffix: true })}
        </Text>
      </Pressable>
      <Pressable
        onPress={onPressDelete}
        style={({ pressed }) => [
          styles.deleteButton,
          pressed && styles.deleteButtonPressed,
        ]}
        hitSlop={12}
      >
        <Ionicons name="close-circle-outline" size={32} color={colors.white} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: "row",
    gap: 12,
  },
  mainItem: {
    flexGrow: 1,
    width: "70%" /* Janky RN flexGrow causes truncated text to overflow 🫨 */,
  },
  nameText: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: 15,
    marginBottom: 3,
    flexGrow: 1,
  },
  dateText: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: 13,
    opacity: 0.5,
  },
  deleteButton: {
    opacity: 0.5,
  },
  deleteButtonPressed: {
    opacity: 1,
  },
});

export default HistoryItem;
