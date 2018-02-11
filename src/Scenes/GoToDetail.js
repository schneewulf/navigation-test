//@flow
import React from 'react';
import {View, Text, Button} from 'react-native';

export default function GoToDetail(props) {
  return (
    <View>
      <Text>GoToDetail</Text>
      <Button
        title="go to detail"
        onPress={() => props.navigation.navigate('Detail')}
      />
    </View>
  );
}
