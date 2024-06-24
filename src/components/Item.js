import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Item = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.heading}>Item</Text>
    </View>
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
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    fontSize: 32,
    fontWeight: "200",
    paddingBottom: 15,
  },
});

export default Item;
