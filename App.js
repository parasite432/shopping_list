import React from "react";
import { View, StyleSheet } from "react-native";
import AllList from "./src/components/AllLists";

const App = () => {
  return (
    <View style={styles.container}>
      <AllList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
