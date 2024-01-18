import { StatusBar } from "expo-status-bar";
import Home from "./screens/Home";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import React, { useState } from "react";
import HomeStack from "./routes/HomeStack";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./routes/Drawer";

const getFonts = () => {
  return Font.loadAsync({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
  });
};

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  if (isFontLoaded) {
    return <Drawer />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setIsFontLoaded(true)}
        onError={console.warn}
      />
    );
  }
}
