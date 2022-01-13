import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import Colors from "../components/colorBox";

const SOLARIZED = [
  { colorName: "Base03", hexCode: "#002b36" },
  { colorName: "Base02", hexCode: "#073642" },
  { colorName: "Base01", hexCode: "#586e75" },
  { colorName: "Base00", hexCode: "#657b83" },
  { colorName: "Base0", hexCode: "#839496" },
  { colorName: "Base1", hexCode: "#93a1a1" },
  { colorName: "Base2", hexCode: "#eee8d5" },
  { colorName: "Base3", hexCode: "#fdf6e3" },
  { colorName: "Yellow", hexCode: "#b58900" },
  { colorName: "Orange", hexCode: "#cb4b16" },
  { colorName: "Red", hexCode: "#dc322f" },
  { colorName: "Magenta", hexCode: "#d33682" },
  { colorName: "Violet", hexCode: "#6c71c4" },
  { colorName: "Blue", hexCode: "#268bd2" },
  { colorName: "Cyan", hexCode: "#2aa198" },
  { colorName: "Green", hexCode: "#859900" },
];

const ColorPalette = () => {
  return (
    <FlatList
      style={[styles.container]}
      data={SOLARIZED}
      keyExtractor={(item) => item.hexCode}
      renderItem={({ item }) => (
        <Colors name={item.colorName} hexCode={item.hexCode} />
      )}
      ListHeaderComponent={
        <Text style={styles.text}>These are Solarized colors</Text>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    // alignItems: "center",
    // justifyContent: "center",
    marginBottom: 10,
    width: 360,
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
