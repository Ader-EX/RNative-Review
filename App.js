import { StatusBar } from "expo-status-bar";
import Home from "./screens/Home";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";

const getFonts = () => {
  return Font.loadAsync({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
  });
};

export default function App() {
  return (
    <View>
      <Home />
    </View>
  );
}
