//@flow
import React from 'react';
import {View, Text, Button} from 'react-native';

export default function HomeScreen(props) {
  return (
    <View style={{backgroundColor: 'blue'}}>
      <Text>HomeScreen</Text>
      <Button title="Login" onPress={() => props.navigation.navigate('Main')} />
    </View>
  );
}
