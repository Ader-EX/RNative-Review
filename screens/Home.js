import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";
import { AppLoading } from "expo";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import CustomCard from "../shared/CustomCard";

export default function Home() {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", { item: item })}
          >
            <CustomCard title={item.title} rating={item.rating} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
