import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  StatusBar,
} from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}> Welcome! </Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.heading}> All Lists </Text>
        <Image
          source={require("./img/add/add-45.png")}
          style={styles.imageProfile}
        />
      </View>
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
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    fontSize: 32,
    fontWeight: "200",
    paddingBottom: 15,
  },
});

export default App;