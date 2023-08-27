import React from "react";
import { View, StyleSheet } from "react-native";
import Laskin from "./assets/Laskin";

export default function App() {
  return (
    <View style={styles.container}>
      <Laskin />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});