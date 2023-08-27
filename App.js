import React, { useState } from "react";
import { View, Button, Alert, TextInput, Image } from "react-native";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";

export default function App() {
  const buttonPressed = () => {
    Alert.alert("You typed:" + text);
  };

  const [text, setText] = useState("");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setText(text)}
        value={text}
      />

      <Button onPress={buttonPressed} title="Press me" />
      <Image
        style={{ width: 250, height: 100 }}
        source={require("assets\haaga_helia.jpg")} />
      
    </View>
  );
}




