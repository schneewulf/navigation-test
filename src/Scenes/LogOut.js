//@flow
import React from 'react';
import {View, Text, Button} from 'react-native';

export default function LogOut(props) {
  return (
    <View>
      <Text>LogOut</Text>
      <Button
        title="Log Out"
        onPress={() => {
          props.navigation.navigate('Login');
        }}
      />
    </View>
  );
}
