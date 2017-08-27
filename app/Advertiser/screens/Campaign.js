import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { stylesVar } from '../../common.styles';
import PSTextInput from '../../components/PSTextInput';
import PSButton from '../../components/PSButton';

export default class Campaign extends Component {
  static navigationOptions = ({ navigation }) => ({
    // title: `${navigation.state.params.name}'s Campaign'`,
    title: 'Campaign',
  });
  renderField(title, initialValue) {
    return (
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>{title}</Text>
        <PSTextInput
          style={styles.fieldText}
          value={initialValue}
        />
      </View>
    );
  }
  render() {
    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>
        <View>
          {/* <Image source={params.image_url} /> */}
          <Text style={styles.textTitle}>{params.name}</Text>
          <Text style={styles.text}>{params.display_address[0] + ' ' + params.display_address[1]}</Text>
        </View>
        <View style={styles.catContainer}>
          <PSButton style={styles.catContainerItem} onPress={() => {}} />
          <PSButton style={styles.catContainerItem} onPress={() => {}} />
          <PSButton style={styles.catContainerItem} onPress={() => {}} />
          <PSButton style={styles.catContainerItem} onPress={() => {}} />
          <PSButton style={styles.catContainerItem} onPress={() => {}} />
          <PSButton style={styles.catContainerItem} onPress={() => {}} />
        </View>
        <View>
          <Text style={styles.textTitle}>Contract details</Text>
        </View>
        <View>
          { this.renderField("Payment per post", "0.04 ETH") }
          { this.renderField("Min duration per post", "1 week") }
          { this.renderField("Max participants", "5") }
          <View style={styles.captionField}><PSTextInput placeholder="Set required caption" /></View>
          <View style={styles.summaryContainer}>
            <View style={styles.totalEscrow}>
              <Text style={styles.escrowLabel}>Total Escrow:</Text>
              <Text style={styles.escrowValue}>2 ETH</Text>
            </View>
            <Text style={styles.userEst}>Reach 8-10k users</Text>
          </View>
        </View>
        <View style={styles.submitButtonContainer}>
          <PSButton
            style={styles.submitButton}
            title="Create Campaign"
            onPress={() => {}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  summaryContainer: {
    marginRight: 8,
    alignItems: 'flex-end',
  },
  totalEscrow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  escrowLabel: {
    marginBottom: 2,
    fontSize: 16,
  },
  escrowValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
  userEst: {
    fontSize: 12,
    fontStyle: 'italic',
  },
  container: {
    flex: 1,
  },
  fieldContainer: {
    marginLeft: 8,
    marginBottom: 4,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: stylesVar.color.border,
  },
  fieldLabel: {
    position: 'absolute',
    fontSize: 16,
    fontWeight: 'bold',
  },
  fieldText: {
    textAlign: 'right',
  },
  captionField: {
    height: 80,
  },
  catContainer: {
    flexDirection: 'row',
    marginHorizontal: 6,
    marginVertical: 8,
  },
  catContainerItem: {
    flex: 1,
    marginHorizontal: 2,
  },
  textTitle: {
    marginLeft: 8,
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    marginLeft: 8,
    fontSize: 16,
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
