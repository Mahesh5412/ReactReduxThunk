
import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, Header } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import store from './src/Store/index';
import Splash from './src/LaunchComponents/Splash';
import NavigationRouter from './src/Navigations/NavigationRouter';

const RootStack = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        header: null,
      },
    },

    NavigationRouter: {
      screen: NavigationRouter,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Splash',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {

    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )

  }
}