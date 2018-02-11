//@flow
import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

type State = {
  inputValue: string,
};

type Props = {};

class SubmitName extends Component<Props, State> {
  state = {
    inputValue: '',
  };

  render() {
    return (
      <View>
        <TextInput
          style={{height: 40, borderWidth: 1, borderColor: 'gray'}}
          onChangeText={(text) => this.setState({inputValue: text})}
          value={this.state.inputValue}
          placeholder="type your name"
        />
        <Button
          title="Submit"
          onPress={() => {
            if (this.state.inputValue === '') {
              return;
            }
            this.props.navigation.navigate('NameDisplay', {
              name: this.state.inputValue,
            });
          }}
        />
      </View>
    );
  }
}

export default SubmitName;
