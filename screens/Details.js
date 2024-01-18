import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Details() {
  const navigate = useNavigation();
  const route = useRoute();
  const item = route.params.item;
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titletext}>{item.title}</Text>
      <Button
        title="Go Back"
        onPress={() => {
          navigate.goBack();
        }}
      />
    </View>
  );
}
