//@flow
import React, {Component} from 'react';
import {View, Text} from 'react-native';

type State = {};
type Props = {};

class NameDisplay extends Component<Props, State> {
  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;

    return {
      title: params.name ? params.name : null,
    };
  };

  render() {
    const {params} = this.props.navigation.state;
    const name = params ? params.name : null;
    return (
      <View>
        <Text>Hi {name}!</Text>
      </View>
    );
  }
}

export default NameDisplay;
