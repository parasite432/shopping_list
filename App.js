import React from "react";
import { View, StyleSheet } from "react-native";
import AllList from "./src/components/AllLists";
import Item from "./src/components/Item";
import ShoppingList from "./src/components/ShoppingList";

const App = () => {
  return (
    <View style={styles.container}>
      <ShoppingList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
