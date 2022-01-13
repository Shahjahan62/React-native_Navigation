import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import Colors from "../components/colorBox";

const ColorPalette = ({ route }) => {
  const { colorPalette, colors } = route.params;
  return (
    <FlatList
      style={styles.container}
      data={colors}
      keyExtractor={(item) => item.hexCode}
      renderItem={({ item }) => (
        <Colors name={item.colorName} hexCode={item.hexCode} />
      )}
      ListHeaderComponent={<Text style={styles.text}>{colorPalette}</Text>}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // alignItems: "center",
    // justifyContent: "center",
    marginBottom: 10,
    // width: 360,
    paddingHorizontal: 20,
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
export default ColorPalette;
