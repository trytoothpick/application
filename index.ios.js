import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './app/App';

export default class toothpick extends Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('toothpick', () => toothpick);
