import HistoryItem from "../components/HistoryItem/HistoryItem";
import { colors } from "../theme/colors";
import { fonts } from "../theme/fonts";
import { View, StyleSheet, Text, FlatList } from "react-native";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import { useScanHistory } from "../hooks/useScanHistory";
import ClearHistory from "../components/HistoryItem/ClearHistory";
import { useScanner } from "../hooks/useScanner";
import ItemModal from "../components/ItemModal";

const History = () => {
  const {
    scannedData,
    setScannedData,
    isModalVisible,
    setIsModalVisible,
    onCloseModal,
  } = useScanner();
  const { historyItems, isLoading } = useScanHistory();

  if (historyItems.length === 0 && isLoading) {
    return <LoadingScreen />;
  }

  const sortedItems = historyItems.sort(
    (a, b) => new Date(b.scannedAt).getTime() - new Date(a.scannedAt).getTime()
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Scanned Items</Text>
      <ItemModal
        isVisible={isModalVisible}
        onClose={onCloseModal}
        data={scannedData}
      />
      {historyItems.length > 0 ? (
        <FlatList
          data={sortedItems}
          renderItem={({ item }) => (
            <HistoryItem
              data={item.data}
              scannedAt={item.scannedAt}
              onPressBody={() => {
                setScannedData(item.data);
                setIsModalVisible(true);
              }}
            />
          )}
          keyExtractor={(item) => item.data}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListFooterComponent={() => <ClearHistory />}
          refreshing={false}
          onRefresh={() => {
            console.log("Todo: implement refreshing.");
          }}
        />
      ) : (
        <Text style={styles.emptyState}>
          You don't have any scanned items yet. Get out there and scan some QRs!
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue.s900,
    paddingTop: 52,
  },
  separator: {
    backgroundColor: colors.white,
    opacity: 0.4,
    height: 1,
    marginHorizontal: 24,
  },
  header: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 20,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  emptyState: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: 16,
    lineHeight: 16 * 1.6,
    padding: 24,
    paddingTop: 12,
    opacity: 0.6,
  },
});

export default History;
