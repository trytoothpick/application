import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { stylesVar } from '../../common.styles';

export default class Feed extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Feed',
  });
  renderListItem() {
    return (
      <View style={styles.listItemContainer}>
        <View style={styles.liHeader}>
          <Text style={[styles.text, styles.headerText]}>0.4 ETH</Text>
        </View>
        <View style={styles.liFooter}>
          <Text style={styles.text}>1 mile away</Text>
          <Text style={[styles.text, styles.titleText]}>Bread & Basket</Text>
          <Text style={styles.text}>Address</Text>
        </View>
      </View>
    );
  }
  render() {
    const { params } = this.props.navigation.state;

    return (
      <ScrollView>
        {this.renderListItem()}
        {this.renderListItem()}
        {this.renderListItem()}
        {this.renderListItem()}
        {this.renderListItem()}
        {this.renderListItem()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
  headerText: {
    fontWeight: 'bold',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  listItemContainer: {
    marginTop: 8,
    padding: 16,
    height: 140,
    backgroundColor: 'gray',
  },
  liHeader: {

  },
  liFooter: {
    position: 'absolute',
    bottom: 16,
    left: 16,
  }
});
