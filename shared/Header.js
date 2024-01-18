import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.hdtext}>
          <Entypo name="game-controller" size={20} color="black" /> GameZone
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",

    justifyContent: "center",
  },
  hdtext: { fontWeight: "bold", fontSize: 20, color: "#333", letterSpacing: 1 },
});
