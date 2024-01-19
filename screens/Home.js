import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/global";
import { AppLoading } from "expo";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import CustomCard from "../shared/CustomCard";
import CustomForm from "../shared/CustomForm";
import { TouchableWithoutFeedback } from "react-native-web";
import CustomButton from "../shared/CustomButton";

export default function Home() {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "The Legend of Zelda: Breath of the Wild is a 2017 action-adventure game developed and published by Nintendo for the Nintendo Switch and Wii U. Set at the end of the Zelda timeline, the player controls an amnesiac Link as he sets out to save Princess Zelda and prevent Calamity Ganon from destroying the world.",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "Pokémon is a Japanese media franchise consisting of video games, animated series and films, a trading card game, and other related media. The franchise takes place in a shared universe in which humans co-exist with creatures known as Pokémon, a large variety of species endowed with special powers.",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "Final Fantasy VII Rebirth is an upcoming action role-playing game developed and published by Square Enix, scheduled to release for PlayStation 5 on February 29, 2024. It is a sequel to Final Fantasy VII Remake, and the second in a planned trilogy of games remaking the 1997 PlayStation game Final Fantasy VII. ",
      key: "3",
    },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((curReviews) => {
      return [review, ...curReviews];
    });
    setIsVis(false);
  };
  const [isVis, setIsVis] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
      <Modal visible={isVis} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
          <View style={styles.modalShow}>
            <CustomForm addReview={addReview} />
            <CustomButton
              title="Cancel"
              onPress={() => {
                setIsVis(false);
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <TouchableOpacity onPress={() => setIsVis(true)}>
        <View style={styles.addButton}>
          <Text style={globalStyles.icona}>+</Text>
        </View>
      </TouchableOpacity>
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

const styles = StyleSheet.create({
  modalShow: {
    flex: 1,
    padding: 10,
  },
  addButton: {
    borderColor: "#333",
    opacity: 0.4,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: "center",
    fontWeight: "bold",

    justifyContent: "center",
  },
});
