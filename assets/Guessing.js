import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

export default function Guessing() {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [tries, setTries] = useState(0);
  
  const handleGuess = () => {
    const userGuess = parseInt(guess);
    
    setTries(tries + 1);
   
    if (isNaN(userGuess)) {
      setMessage("Please enter a valid number.");
    } else if (userGuess < 1 || userGuess > 100) {
      setMessage("Please enter a number between 1 and 100.");
    } else if (userGuess === randomNumber) {
    Alert.alert(`Congratulations! You guessed the correct number in ${tries} tries.`);
    } else if (userGuess < randomNumber) {
      setMessage("Your guess is too low. Try again.");
    } else {
      setMessage("Your guess is too high. Try again.");
    }
    

  


    setGuess("");
  };

  return (
    <View>
      <Text>{message}</Text>
      <TextInput
        placeholder="Enter your guess"
        keyboardType="numeric"
        value={guess}
        onChangeText={setGuess}
      />
      <Button title="Guess" onPress={handleGuess} />
    </View>
  );
}