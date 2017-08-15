import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class Welcome extends Component {
  openExampleScreen = () => {
    const { navigate } = this.props.navigation;
    navigate('Example');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.openExampleScreen}>
          <Text style={styles.link}>
            OPEN NEXT SCREEN
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },
    link: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black'
    },
});
