import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native';



export default function HomeScreen({ navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello screen</Text>
        <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings', {user: 'Joonas'})}
        // Navigate to Settings screen
        />
        </View>
        );
        }