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
        <Text>Hi</Text>
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
