import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  StatusBar,
  ComboBox,
  ScrollView,
  FlatList,
} from "react-native";
import CheckBox from "expo-checkbox";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Item = ({ title, status }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.item}>{title}</Text>
    <CheckBox value={status} style={styles.checkbox} />
  </View>
);

const empty = () => (
  <View style={styles.itemContainer}>
    <Text>There are currently no items in your shopping list </Text>
  </View>
);

const ShoppingList = () => {
  const DATA = [
    { title: "Milk", status: "complete" },
    { title: "Bread", status: "complete" },
    { title: "Eggs", status: "complete" },
    { title: "Butter", status: "complete" },
    { title: "Cheese", status: "complete" },
    { title: "Chicken", status: "complete" },
    { title: "Beef", status: "complete" },
    { title: "Pork", status: "complete" },
    { title: "Fish", status: "complete" },
    { title: "Apples", status: "complete" },
    { title: "Bananas", status: "complete" },
    { title: "Oranges", status: "complete" },
    { title: "Grapes", status: "complete" },
    { title: "Strawberries", status: "complete" },
    { title: "Blueberries", status: "complete" },
    { title: "Potatoes", status: "complete" },
    { title: "Tomatoes", status: "complete" },
    { title: "Onions", status: "complete" },
    { title: "Carrots", status: "complete" },
    { title: "Broccoli", status: "complete" },
    { title: "Lettuce", status: "complete" },
    { title: "Spinach", status: "complete" },
    { title: "Cabbage", status: "complete" },
    { title: "Mushrooms", status: "complete" },
    { title: "Bell Peppers", status: "complete" },
    { title: "Cucumbers", status: "complete" },
    { title: "Zucchini", status: "complete" },
    { title: "Garlic", status: "complete" },
    { title: "Ginger", status: "complete" },
    { title: "Olive Oil", status: "complete" },
    { title: "Canola Oil", status: "complete" },
    { title: "Salt", status: "complete" },
    { title: "Pepper", status: "complete" },
    { title: "Sugar", status: "complete" },
    { title: "Flour", status: "complete" },
    { title: "Rice", status: "complete" },
    { title: "Pasta", status: "complete" },
    { title: "Cereal", status: "complete" },
    { title: "Oatmeal", status: "complete" },
    { title: "Peanut Butter", status: "complete" },
    { title: "Jam", status: "complete" },
    { title: "Honey", status: "complete" },
    { title: "Yogurt", status: "complete" },
    { title: "Ice Cream", status: "complete" },
    { title: "Coffee", status: "complete" },
    { title: "Tea", status: "complete" },
    { title: "Juice", status: "complete" },
    { title: "Soda", status: "complete" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navButton}>
        <AntDesign name="left" size={20} color="black" />
        <Text> All Lists </Text>
      </View>

      <View style={styles.header}>
        <Text style={styles.heading}> Shopping List </Text>
        <Ionicons
          name="add-circle"
          size={54}
          color="black"
          style={styles.imageProfile}
        />
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight + 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10,
  },
  heading: {
    fontSize: 36,
    fontWeight: "bold",
  },
  title: {
    fontSize: 32,
    fontWeight: "200",
    paddingBottom: 15,
  },
  navButton: {
    flexDirection: "row",
    fontSize: 16,
    marginBottom: 20,
    marginTop: 10,
  },
  item: {
    fontSize: 25,
    fontWeight: "bold",
  },
  itemContainer: {
    paddingTop: 20,
    paddingLeft: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 30,
  },
  checkbox: {
    height: 30,
    width: 30,
  },
  list: {
    paddingBottom: 10,
  },
});

export default ShoppingList;
