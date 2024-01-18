import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";
import { AntDesign } from "@expo/vector-icons";

export default function CustomCard({ title, rating }) {
  return (
    <View style={styles.card}>
      <View style={styles.newSection}>
        <Text style={globalStyles.titletext}>{title}</Text>
        <View style={styles.rating}>
          <AntDesign name="star" size={20} color="#FF9529" />
          <Text style={styles.aligner}>{" " + rating + ".0"}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    padding: 10,
  },
  newSection: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  aligner: {
    color: "#FF9529",
    fontWeight: "bold",
    fontSize: 14,
  },
  rating: {
    alignSelf: "center",
    flexDirection: "row",
  },
});
