import { Linking, StyleSheet, Text, TouchableOpacity } from "react-native";
import { fonts } from "../../../theme/fonts";

type Props = {
  url: string;
  onPress: () => void;
};

const LinkButton = ({ url, onPress }: Props) => (
  <TouchableOpacity style={styles.text} activeOpacity={0.5} onPress={onPress}>
    <Text ellipsizeMode="tail" numberOfLines={1} style={styles.link}>
      {url}
    </Text>
  </TouchableOpacity>
);

export default LinkButton;

const styles = StyleSheet.create({
  text: {
    backgroundColor: "white",
    width: "101%",
  },
  link: {
    fontSize: 12,
    color: "rgba(6,18,58,1)",
    textAlign: "center",
    paddingVertical: 9,
    paddingHorizontal: 4,
    fontFamily: fonts.medium,
  },
});
