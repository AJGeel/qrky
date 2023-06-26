import { Tabs, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";

const Layout = () => {
  const [fontsLoaded] = useFonts({
    "DMSans-Regular": require("../assets/fonts/DMSans/DMSans-Regular.otf"),
    "DMSans-Medium": require("../assets/fonts/DMSans/DMSans-Medium.otf"),
    "DMSans-Bold": require("../assets/fonts/DMSans/DMSans-Bold.otf"),
  });

  if (!fontsLoaded) {
    return <SplashScreen />;
  }

  return (
    <>
      {!fontsLoaded && <SplashScreen />}
      <StatusBar style="light" animated backgroundColor="rgba(0,0,0,0)" />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "rgba(6,18,58,1)",
            borderTopWidth: 1,
            borderTopColor: "rgba(255,255,255,.2)",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="qr-code"
                size={24}
                color={focused ? "rgba(255,255,255,1)" : "rgba(255,255,255,.4)"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="albums"
                size={24}
                color={focused ? "rgba(255,255,255,1)" : "rgba(255,255,255,.4)"}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default Layout;
