import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import InputSearch from "./components/InputSearch";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Todo App</Text>
      <View>
        <InputSearch />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  text: {
    fontSize: 25,
  },
});
