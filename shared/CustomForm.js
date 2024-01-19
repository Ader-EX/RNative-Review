import { Formik } from "formik";
import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { globalStyles } from "../styles/global";
import * as yup from "yup";
import CustomButton from "./CustomButton";

const ReviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("is-num : 1-5 ", "rating not 1-5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

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
        }}
        validationSchema={ReviewSchema}
      >
        {(props) => (
          <View>
            <TextInput
              placeholder=" Title"
              onChangeText={props.handleChange("title")}
              style={[globalStyles.paragraph, globalStyles.input]}
              value={props.values.title}
              onBlur={props.handleBlur("title")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.title && props.errors.title}
            </Text>
            <TextInput
              multiline
              minHeight={100}
              placeholder=" Description"
              style={[globalStyles.paragraph, globalStyles.input]}
              onChangeText={props.handleChange("body")}
              value={props.values.body}
              onBlur={props.handleBlur("body")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.body && props.errors.body}
            </Text>
            <TextInput
              placeholder=" Rating (1-5)"
              style={[globalStyles.paragraph, globalStyles.input]}
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType="numeric"
              onBlur={props.handleBlur("rating")}
            />
            <Text style={globalStyles.errorText}>
              {props.touched.rating && props.errors.rating}
            </Text>
            <CustomButton title="Submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
