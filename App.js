
import { StyleSheet } from "react-native";
import Laskin from "./assets/Laskin";
import React, { useState } from "react";
import { View, Button, Alert, TextInput, Image } from "react-native";
import Guessing from "./assets/Guessing";
import { StatusBar } from "expo-status-bar";
import ShoppingList from "./assets/ShoppingList";

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingList/>
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