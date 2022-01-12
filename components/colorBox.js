import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Colors = (props) => {
  const BoxColor = {
    backgroundColor: props.hexCode,
  };
  const textStyle = {
    color:
      parseInt(props.hexCode.replace("#", ""), 16) > 0xffffff / 1.1
        ? "black"
        : "white",
  };
  return (
    <View style={[BoxColor, styles.container]}>
      <Text style={[textStyle, styles.text]}>
        {props.name}:{props.hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    width: 320,
    marginBottom: 10,
    borderRadius: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 2,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Colors;
