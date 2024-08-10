import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

export default function InputItems({title}) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16}}>{title}</Text>
      <View style={styles.button}>
        <AntDesign name="delete" size={24} color="red" />
        <Feather
          style={{ marginLeft: 8 }}
          name="edit"
          size={24}
          color="green"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: 'space-between',
    backgroundColor: '#F3F1F4',
    padding: 15,
    borderRadius:5,
    marginBottom:15

  },
  button: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    cursor: "pointer",
  },
});
