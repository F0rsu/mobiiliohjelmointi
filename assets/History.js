import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, FlatList, StyleSheet } from "react-native";

export default function History({route, navigation}) {
 
 
  const {data} = route.params;

 






  
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
    
      
      <Text style={styles.historyText}>History</Text>
      <FlatList
  style={styles.list}
  data={data}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => <Text style={styles.listItem}>{item.key}</Text>}
/>
    </View>
  );
}







