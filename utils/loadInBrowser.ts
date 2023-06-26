import { Linking } from "react-native";

export const loadInBrowser = (url: string) => {
  Linking.openURL(url).catch((err) => {
    console.log("🤖 DEBUG:", err);
    alert("Unable to open the URL.");
  });
};
