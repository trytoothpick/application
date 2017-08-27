// import React, { Component } from 'react';
// import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Search from './screens/Search';
import Campaign from './screens/Campaign';

// class Advertiser extends Component {
//   static navigationOptions = {
//     title: 'Welcome',
//   };
//   render() {
//     return <Text>AdvertiserRoot</Text>;
//   }
// }

export default StackNavigator({
  Search: { screen: Search },
  Campaign: { screen: Campaign },
});
