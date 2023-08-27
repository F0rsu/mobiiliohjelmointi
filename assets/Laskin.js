import React, { useState } from "react";
import { View, Button, Alert, TextInput, Image } from "react-native";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";

export default function Laskin() {
  const [num1, setNumber1] = useState("");
  const [num2, setNumber2] = useState("");
  const [result, setResult] = useState('');

  const handleAddition = () => {
    const sum = Number(num1) + Number(num2);
    setResult(`(Sum:) ${sum}`);
  };

  const handleSubtraction = () => {
    const difference = Number(num1) - Number(num2);
    setResult(`(Difference:) ${difference}`);
  };
 
 
 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    inputContainer: {
        flexDirection: "column",
        marginBottom: 10,
      },
      input: {
        width: 100,
        borderColor: "gray",
        borderWidth: 1,
        marginRight: 10,
      },
      buttonContainer: {
        flexDirection: "row",
      },

});

  return (
    <View style={styles.container}>
      
      <Text>Result: {result}</Text>
      
      <View style={styles.inputContainer}>
      <TextInput
        style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(num1) => setNumber1(num1)}
        value={num1}
        keyboardType="numeric"
      />

<TextInput
        style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(num2) => setNumber2(num2)}
        value={num2}
        keyboardType="numeric"
      />
    </View>
    
    <View style={styles.buttonContainer}></View>
    <Button title="+" onPress={handleAddition} />
    <Button title="-" onPress={handleSubtraction} />
    
    </View>
  );
}
