import { StyleSheet, View } from "react-native";

import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <View style={styles.rootContainer}>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#ddb52f",
    flex: 1,
  },
});
