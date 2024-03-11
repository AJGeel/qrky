import { Tabs } from "expo-router";
import { useFonts } from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import colors from "@/theme/colors";

const Layout = () => {
  const [fontsLoaded] = useFonts({
    "DMSans-Regular": require("../assets/fonts/DMSans/DMSans-Regular.otf"),
    "DMSans-Medium": require("../assets/fonts/DMSans/DMSans-Medium.otf"),
    "DMSans-Bold": require("../assets/fonts/DMSans/DMSans-Bold.otf"),
  });

  if (!fontsLoaded) {
    return;
  }

  return (
    <>
      <StatusBar style="light" animated backgroundColor={colors.transparent} />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: colors.navy["1.0"],
            borderTopWidth: 1,
            borderTopColor: colors.white["0.2"],
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
                color={focused ? colors.white["1.0"] : colors.white["0.4"]}
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
                color={focused ? colors.white["1.0"] : colors.white["0.4"]}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default Layout;
