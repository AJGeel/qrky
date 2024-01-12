import { Tabs, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { colors } from "../theme/colors";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const tabBarIcon = (focused: boolean, name: "qr-code" | "albums") => (
  <Ionicons
    name={name}
    size={24}
    color={focused ? "rgb(255,255,255)" : "rgba(255,255,255,.4)"}
  />
);

const Layout = () => {
  // TODO: Extract to useSystemAssets hook
  const [fontsLoaded] = useFonts({
    "DMSans-Regular": require("../assets/fonts/DMSans/DMSans-Regular.otf"),
    "DMSans-Medium": require("../assets/fonts/DMSans/DMSans-Medium.otf"),
    "DMSans-Bold": require("../assets/fonts/DMSans/DMSans-Bold.otf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" animated backgroundColor={colors.transparent} />
      {/* TODO: Extract tabs to components/Navigation/Tabs */}
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: colors.blue.s900,
            borderTopWidth: 2,
            borderTopColor: "rgba(255,255,255,.1)",
            height: 64,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ focused }) => tabBarIcon(focused, "qr-code"),
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            tabBarIcon: ({ focused }) => tabBarIcon(focused, "albums"),
          }}
        />
      </Tabs>
    </>
  );
};

export default Layout;
