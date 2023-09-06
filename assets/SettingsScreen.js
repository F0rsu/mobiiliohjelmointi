import React from 'react';
import { View, Text } from 'react-native';





export default function SettingsScreen({route, navigation}) {
const {user} = route.params;




    return (


<View>
<Text>Welcome to settings {user}</Text>
</View>
);
};








