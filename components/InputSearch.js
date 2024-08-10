import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function InputSearch() {
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <TextInput style={styles.input} placeholder="Add your new todo" />
        <AntDesign style={styles.icon} name="plus" size={30}  />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
  },
  flex: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    height: 50,
    width: "80%",
    borderWidth: 1,
    borderColor: "#363636",
    borderRadius: 5,
    paddingLeft: 10,
  },
  icon: {
    height: 50,
    marginLeft: 10,
    backgroundColor: "tomato",
    color: "#fff",
    padding: 8,
    borderRadius: 5,
    cursor: 'pointer'
  },
});
