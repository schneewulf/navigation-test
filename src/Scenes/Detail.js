//@flow
import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Detail(props) {
  return (
    <View>
      <Text>Detail</Text>
      <Button
        title="Press to go back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
}
