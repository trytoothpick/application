import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Advertiser extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return <Text>AdvertiserRoot</Text>;
  }
}

export default StackNavigator({
  Root: { screen: Advertiser },
});
