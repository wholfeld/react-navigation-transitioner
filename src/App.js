import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Easing,
  View,
  Animated,
  Dimensions,
  Image
} from 'react-native';
import {
  Transitioner,
  StackRouter,
  createNavigationContainer,
  addNavigationHelpers,
  createNavigator
} from 'react-navigation';

import Welcome from './views/Welcome';
import Example from './views/Example';

class CustumNavigationView extends Component {
  render() {
    const { navigation, router } = this.props;

    return (
      <Transitioner
        configureTransition={this._configureTransition}
        navigation={navigation}
        render={this._render}
      />
    );
  }

  _configureTransition(transitionProps, prevTransitionProps) {
    return {
      // duration in milliseconds, default: 250
      duration: 200,
      // An easing function from `Easing`, default: Easing.inOut(Easing.ease)
      easing: Easing.out(Easing.ease),
    };
  }

  _render = (transitionProps, prevTransitionProps) => {
    const scenes = transitionProps.scenes.map(scene => this._renderScene(transitionProps, scene));
    return (
      <View style={{ flex: 1 }}>
        {scenes}
      </View>
    );
  }

  _renderScene = (transitionProps, scene) => {
    const { navigation, router } = this.props;
    const { routes } = navigation.state;
    const { position } = transitionProps;
    const { index } = scene;

    const animatedValue = position.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: [0, 1, 0],
    });

    const animation = {
      opacity: animatedValue,
      transform: [
        { scale: animatedValue },
      ],
    };

    // The prop `router` is populated when we call `createNavigator`.
    const Scene = router.getComponentForRouteName(scene.route.routeName);
    return (
      <Animated.View key={index} style={[styles.container, animation]}>
        <Scene
          navigation={addNavigationHelpers({
            ...navigation,
            state: routes[index],
          })}
        />
      </Animated.View>
    )
  }
}

const CustomRouter = StackRouter({
  Welcome: { screen: Welcome },
  Example: { screen: Example },
});

const App = createNavigationContainer(
  createNavigator(CustomRouter)(CustumNavigationView)
);

export default App;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
