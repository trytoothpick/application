import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { stylesVar } from '../../common.styles';

export default class Feed extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Feed',
  });
  render() {
    const { params } = this.props.navigation.state;

    return (
      <View></View>
    );
  }
}

const styles = StyleSheet.create({

});
