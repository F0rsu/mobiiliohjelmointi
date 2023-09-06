import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, FlatList, StyleSheet } from "react-native";

export default function Laskin({ navigation}) {
  const [num1, setNumber1] = useState("");
  const [num2, setNumber2] = useState("");
  const [result, setResult] = useState('');
  const [data, setData] = useState([]);

  const handleAddition = () => {
    const sum = Number(num1) + Number(num2);
    const operation = `${num1} + ${num2} = ${sum}`;
    setResult(`(Sum:) ${sum}`);
    setData([...data, { key: operation }]);
  };

  const handleSubtraction = () => {
    const difference = Number(num1) - Number(num2);
    const operation = `${num1} - ${num2} = ${difference}`;
    setResult(`(Difference:) ${difference}`);
    setData([...data, { key: operation }]);
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
      width: 200,
      borderColor: "gray",
      borderWidth: 1,
      marginBottom: 10,
    },
    buttonContainer: {
      flexDirection: "row",
      marginBottom: 10,
    },
    list: {
      marginTop: 20,
    },
    listItem: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setNumber1}
          value={num1}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={setNumber2}
          value={num2}
          keyboardType="numeric"
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={handleAddition} />
        <Button title="-" onPress={handleSubtraction} />
        <Button title="History" onPress={() => navigation.navigate('History', {data})} />
      </View>
      
     
    </View>
  );
}


