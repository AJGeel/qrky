import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import QRCamera from "../src/components/Scanner/Scanner";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    "DMSans-Regular": require("../assets/fonts/DMSans/DMSans-Regular.otf"),
    "DMSans-Medium": require("../assets/fonts/DMSans/DMSans-Medium.otf"),
    "DMSans-Bold": require("../assets/fonts/DMSans/DMSans-Bold.otf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      setIsReady(true);
    }
  }, [fontsLoaded]);

  if (!isReady) {
    return <SplashScreen />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" animated backgroundColor="rgba(0,0,0,0)" />
      <QRCamera />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
