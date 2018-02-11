//@flow

import React from 'react';
import {View} from 'react-native';
import {Ionicons, Entypo} from '@expo/vector-icons';

type IconProps = {
  iconName: string,
  iconType: 'ionicons' | 'entypo',
  iconStyle?: Object,
};

export default function TabBar(props: IconProps) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {props.iconType === 'ionicons' ? (
        <Ionicons
          name={props.iconName}
          size={48}
          color="black"
          style={props.iconStyle ? props.iconStyle : null}
        />
      ) : (
        <Entypo name={props.iconName} size={32} color="gray" />
      )}
    </View>
  );
}
