import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import PSButton from '../../components/PSButton';

export default class Campaign extends Component {
  static navigationOptions = ({ navigation }) => ({
    // title: `${navigation.state.params.name}'s Campaign'`,
    title: 'Campaign',
  });

  render() {
    const { params } = this.props.navigation.state;

    return (
      <View>
        <View>
          {/* <Image source={params.image_url} /> */}
          <Text style={styles.textTitle}>{params.name}</Text>
          <Text style={styles.text}>{params.display_address[0] + ' ' + params.display_address[1]}</Text>
        </View>
        <View style={styles.catContainer}>
          <PSButton style={styles.catContainerItem} onPress={() => {}} />
          <PSButton style={styles.catContainerItem} onPress={() => {}} />
          <PSButton style={styles.catContainerItem} onPress={() => {}} />
        </View>
        <View>
          <Text style={styles.textTitle}>Contract details</Text>
        </View>
        <View>
          <PSButton
            title="Create Campaign"
            onPress={() => {}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  catContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  catContainerItem: {
    flex: 1,
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
  }
});
