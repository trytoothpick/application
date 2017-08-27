import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Influencer extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return <Text>InfluencerRoot</Text>;
  }
}

export default StackNavigator({
  Root: { screen: Influencer },
});
