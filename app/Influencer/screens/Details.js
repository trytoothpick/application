import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { stylesVar } from '../../common.styles';
import PSButton from '../../components/PSButton';

export default class Details extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Details',
  });
  render() {
    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.liFooter}>
            <Text style={styles.text}>1 mile away</Text>
            <Text style={[styles.text, styles.titleText]}>Bread & Basket</Text>
            <Text style={styles.text}>Address</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.mainText}>You are projected to earn 0.4ETH by posting 1 photo from Bread & Basket for 1 week.</Text>
          <Text style={styles.mainText}>See Smart Contract</Text>
        </View>
        <View style={styles.section}>
          <Text>About the owner</Text>
          <Text>Ayana</Text>
          <Text>I opened Bread & Basket in August of 2016. The Strawberry Delight was a family secret recipe that I learned from her beloved grandmother. I’d be delighted to have you visit my bakery!</Text>
        </View>
        <View style={styles.submitButtonContainer}>
          <PSButton
            style={styles.submitButton}
            title="Apply to Campaign"
            onPress={() => {
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    paddingVertical: 20,
  },
  header: {
    height: 140,
  },
  liFooter: {
    position: 'absolute',
    bottom: 16,
    left: 16,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  mainText: {
    marginHorizontal: 8,
    fontSize: 24,
  },
  submitButtonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 16,
    backgroundColor: 'white',

  },
  submitButton: {
  }
});
