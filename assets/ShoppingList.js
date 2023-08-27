import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView, FlatList, StyleSheet, Alert} from "react-native";

export default function ShoppingList(){

  const [item, setItem] = useState("")
  const [data, setData] = useState([]);

  const handleAdd = () => {
    if (item.trim() !== "") {    
    
    setData([...data, { key: item }]);
    setItem("");
    }

   else {
    Alert.alert("You have to list an item!")
   }
  
};

  const handleClear = () => {
    setData([]);
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
      marginTop: 150,

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
    titleText: {
        color: "blue",
        fontSize: 20,
        fontWeight: "bold",
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
    <ScrollView contentContainerStyle={styles.container}>
      
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setItem}
          value={item}
          placeholder="Enter item"
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <Button title="ADD" onPress={handleAdd} />
        <Button title="CLEAR" onPress={handleClear} />
      </View>
      
      <Text style={styles.titleText}>Shopping List</Text>

      <FlatList
        style={styles.list}
        data={data}
        renderItem={({ item }) => <Text style={styles.listItem}>{item.key}</Text>}
      />
    </ScrollView>
  );
}