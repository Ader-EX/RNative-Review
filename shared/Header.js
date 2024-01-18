import React from "react";

import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Header() {
  return (
    <ImageBackground
      style={styles.header}
      source={require("../assets/game_bg.png")}
    >
      <View>
        <Text style={styles.hdtext}>
          <Entypo name="game-controller" size={20} color="black" /> GameZone
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "155%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  hdtext: { fontWeight: "bold", fontSize: 20, color: "#333", letterSpacing: 1 },
});
