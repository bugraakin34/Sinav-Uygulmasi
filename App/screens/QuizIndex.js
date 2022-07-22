import React from "react";
import { ScrollView, StatusBar } from "react-native";
import spaceQuestions from "../data/uzay";
import westernsQuestions from "../data/tarih";
import computerQuestions from "../data/bilgisayar";
import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Uzay"
      color="#36b1f0"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Uzay",
          questions: spaceQuestions,
          color: "#36b1f0"
        })
      }
    />
    <RowItem
      name="Tarih"
      color="#799496"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Tarih",
          questions: westernsQuestions,
          color: "#799496"
        })
      }
    />
    <RowItem
      name="Bilgisayar"
      color="#49475B"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Bilgisayar",
          questions: computerQuestions,
          color: "#49475B"
        })
      }
    />
  </ScrollView>
);