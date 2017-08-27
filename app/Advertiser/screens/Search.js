import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Yelp from '../../utils/yelpController';

import Campaign from './Campaign';

import { stylesVar } from '../../common.styles';
import PSTextInput from '../../components/PSTextInput';
import PSButton from '../../components/PSButton';

export default class Search extends Component {
  static navigationOptions = {
    title: 'Toothpick',
  };
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      searchQuery: '',
      results: [],
    };
  }
  handleNavigateTo(id, name, display_address, image_url) { // TODO: pass whatever other info you want on creation page
    console.log(image_url);
    this.props.navigation.navigate('Campaign', {
      id,
      name,
      display_address,
      image_url,
    });
  }
  renderResultItem(id, name, display_address, image_url) {
    return (
      <TouchableHighlight
        style={styles.scrollViewItem}
        key={id}
        onPress={() => {
          this.handleNavigateTo(id, name, display_address, image_url);
        }}
      >
        <View>
          <Text style={styles.scrollViewItemTitle}>{name}</Text>
          <Text>{display_address[0] + ' ' + display_address[1]}</Text>
        </View>
      </TouchableHighlight>
    );
  }
  render() {
    return (
      <View>
        <View
          style={styles.searchFieldContainer}
        >
          <PSTextInput
            style={styles.searchField}
            autocomplete={false}
            backgroundColor="rgba(0,0,0,0.1)"
            onChangeText={(text) => { this.setState({ searchQuery: text }); }}
            placeholder="Find your restaurant"
          />
          <PSButton
            backgroundColor="transparent"
            imgCenterSrc={require('../../static/img/search.png')}
            onPress={() => {
              if (this.state.searchQuery.length > 0) {
                Yelp.getSearchResult(this.state.searchQuery).then((res) => {
                  this.setState({
                    isSubmitted: true,
                    results: res['businesses'],
                  });
                });
              }
            }}
          />
        </View>
        { !this.state.isSubmitted ?
        <View style={styles.onboardingContainer}>
          <Image source={require('../../static/img/onboardingArrow.png')} />
          <Text style={styles.titleText}>Welcome to Toothpick!</Text>
          <Text style={styles.text}>Start your first campaign by finding your restaurant (powered by Yelp).</Text>
        </View> :
        <ScrollView style={styles.scrollView}>
          {this.state.results.map((item) => this.renderResultItem(item.id, item.name, item.location.display_address, item.image_url))}
        </ScrollView>
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  onboardingContainer: {
    alignItems: 'center',
    paddingTop: 28,
  },
  searchFieldContainer: {
    flexDirection: 'row',
    marginHorizontal: 8,
    marginTop: 8,
  },
  searchField: {
    flex: 1,
    borderRadius: stylesVar.size.borderRadius,
  },
  scrollView: {
    marginTop: 16,
  },
  scrollViewItem: {
    marginLeft: 8,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: stylesVar.color.border,
  },
  scrollViewItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 4,
    fontSize: 18,
    textAlign: 'center',
  },
  titleText: {
    marginTop: 28,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});
