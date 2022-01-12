import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("ColorPalette")}>
        <Text>Click to View the colors</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default Home;
