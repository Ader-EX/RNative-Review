import { Formik } from "formik";
import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function CustomForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Text
        style={
          (globalStyles.titletext,
          {
            alignSelf: "center",
            fontSize: 20,
            fontWeight: "bold",
            color: "#333",
            letterSpacing: 1,
          })
        }
      >
        Add Your Review
      </Text>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(value) => {
          addReview(value);
          set;
        }}
      >
        {(props) => (
          <View>
            <TextInput
              placeholder=" Title"
              onChangeText={props.handleChange("title")}
              style={[globalStyles.paragraph, globalStyles.input]}
              value={props.values.title}
            />
            <TextInput
              placeholder=" Description"
              style={[globalStyles.paragraph, globalStyles.input]}
              onChangeText={props.handleChange("body")}
              value={props.values.body}
            />
            <TextInput
              placeholder=" Rating (1-5)"
              style={[globalStyles.paragraph, globalStyles.input]}
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType="numeric"
            />
            <Button title="Submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
