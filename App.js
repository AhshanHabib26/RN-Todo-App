import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import InputSearch from "./components/InputSearch";
import InputItems from "./components/InputItems";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Todo App</Text>
      <View>
        <InputSearch />
        <InputItems title="Complete a Previous Task" />
        <InputItems title="Leran React Native" />
        <InputItems title="Repair Mobile" />
        <InputItems title="Write a new Blog" />
        <InputItems title="Read a Book" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    marginTop: 30,
  },
  text: {
    fontSize: 25,
  },
});
