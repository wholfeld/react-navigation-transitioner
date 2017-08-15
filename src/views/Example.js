import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class Example extends Component {
  back = () => {
    const { goBack } = this.props.navigation;
    goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.back}>
          <Text style={styles.back}>
            BACK
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
        backgroundColor: 'lightyellow',
    },
    back: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black'
    },
});