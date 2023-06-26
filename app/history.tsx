import { fonts } from "../theme/fonts";
import { View, StyleSheet, Text, FlatList } from "react-native";

const MOCK_DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    date: new Date(),
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    date: new Date(),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    date: new Date(),
  },
];

type ItemProps = { title: string; date: Date };

const Item = ({ title, date }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.text}>{title}</Text>
    <Text style={styles.text}>{date.toString()}</Text>
  </View>
);

const History = () => {
  return (
    <View style={styles.container}>
      {MOCK_DATA.length > 0 ? (
        <>
          <Text style={styles.header}>Scanned Items</Text>
          <FlatList
            data={MOCK_DATA}
            renderItem={({ item }) => (
              <Item title={item.title} date={item.date} />
            )}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(6,18,58,1)",
    padding: 24,
    paddingTop: 52,
  },
  item: {
    paddingVertical: 12,
  },
  text: {
    color: "white",
    fontFamily: fonts.regular,
    fontSize: 16,
  },
  separator: {
    backgroundColor: "rgba(255,255,255,.4)",
    height: 1,
  },
  header: {
    color: "white",
    fontFamily: fonts.bold,
    fontSize: 20,
    marginBottom: 12,
  },
});

export default History;
