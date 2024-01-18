import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { globalStyles } from "../styles/global";
import { useNavigation, useRoute } from "@react-navigation/native";
const images = {
  1: require("../assets/rating-1.png"),
  2: require("../assets/rating-2.png"),
  3: require("../assets/rating-3.png"),
  4: require("../assets/rating-4.png"),
  5: require("../assets/rating-5.png"),
};

export default function Details() {
  const navigate = useNavigation();
  const route = useRoute();
  const item = route.params.item;
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titletext}>{item.title}</Text>
      <Text style={styles.just}>{item.body}</Text>
      <View style={styles.rating}>
        <Text style={globalStyles.titletext}>Gamezone rating : </Text>
        <Image source={images[item.rating]} />
      </View>
      <Button
        title="Go Back"
        onPress={() => {
          navigate.goBack();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flex: 1,
    margin: 10,
    flexDirection: "col",
    alignItems: "center",
  },
  just: {
    textAlign: "justify",
  },
});
