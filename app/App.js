import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Ethereum from './utils/ethereumController';

import { gStyles } from './common.styles';
import PSButton from './components/PSButton';
import AdvertiserRoot from './Advertiser';
import InfluencerRoot from './Influencer';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      isActive: false,
      userType: '',
    };
  }

  render() {
    return (
      <View style={gStyles.body}>
        { !this.state.isActive ?
          <View style={styles.container}>
            <PSButton
              style={styles.button}
              backgroundColor={'#DDDDDD'}
              title="Advertiser"
              onPress={() => {
                this.setState({ isActive: true, userType: 'advertiser' });
              }}
            />
            <PSButton
              style={styles.button}
              backgroundColor={'#DDDDDD'}
              title="Influencer"
              onPress={() => {
                this.setState({ isActive: true, userType: 'influencer' });
              }}
            />
          </View> :
          null
        }
        { this.state.isActive && this.state.userType == 'advertiser' && <AdvertiserRoot /> }
        { this.state.isActive && this.state.userType == 'influencer' && <InfluencerRoot /> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
  },
  button: {
    flex: 1,
    marginHorizontal: 16,
    marginBottom: 16,
  }
});
