import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from "react-native";

import React, { useState } from "react";
import { View, Button, Alert, TextInput, Image } from "react-native";
import Guessing from "./assets/Guessing";
import { StatusBar } from "expo-status-bar";
import ShoppingList from "./assets/ShoppingList";
import HomeScreen from './assets/HomeScreen';
import SettingsScreen from './assets/SettingsScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import Laskin from './assets/Laskin';
import History from './assets/History';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>

    <Stack.Screen name="Laskin"  component={Laskin} ></Stack.Screen>
    <Stack.Screen name="History" component={History} ></Stack.Screen>
    
    </Stack.Navigator>
  
    </NavigationContainer>
    );
    }



const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});