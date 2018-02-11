// @flow

import React, {Component} from 'react';
import {View} from 'react-native';

import styles from './style/Styles';
import Route from './Route';

type Props = {};

type State = {};

export default class App extends Component<Props, State> {
  render() {
    return <Route />;
  }
}
