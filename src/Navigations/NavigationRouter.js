/*
FileName:NavigationRouter.js
Version:1.0.0
Purpose:Navgate to all classes from Here
Devloper:Rishitha,Naveen,Harsha,Mahesh,Raju,MaheshReddy
*/
import React, { Component } from 'react';
import { ActivityIndicator, Button, StatusBar, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import AdminDrawerComponents from './AdminDrawerComponents';
import UserDrawerComponents from './UserDrawerComponents';



//Admin Components
import AdminManageTask from '../AdminComponents/AdminManageTask';
import AdminManageProjects from '../AdminComponents/AdminManageProjects';

//user Components

import MyTask from '../UserComponents/MyTask';
import UserManageProjects from '../UserComponents/UserManageProjects';
import UserManageTask from '../UserComponents/UserManageTask';

//Launch Components

import Login from '../LaunchComponents/Login';

class NavigationRouter extends Component {

  constructor() {
    super();
    this._bootstrapAsync();

  }

  _bootstrapAsync = async () => {

    const userToken = await AsyncStorage.getItem('userToken');

    const role = await AsyncStorage.getItem('emp_role');

    if (userToken) {

      if (role.toLowerCase() == "admin") {

        this.props.navigation.navigate('AdminAppStack');
      }
      else {

        this.props.navigation.navigate('UserAppStack');
      }
    }
    else {
      this.props.navigation.navigate('LoginStack');
    }
  };

  render() {
    return (
      <View></View>
    );
  }
}

//Admin Navigation 
const AdminDrawer = createDrawerNavigator(
  {
    AdminManageTask: { screen: AdminManageTask },
    AdminManageProjects: { screen: AdminManageProjects },
   
  },
  {

    contentComponent: AdminDrawerComponents
  }

);
//User Navigation 
const UserDrawer = createDrawerNavigator(
  {

    MyTask: { screen: MyTask },
    UserManageProjects: { screen: UserManageProjects },
    UserManageTask: { screen: UserManageTask },
  }, {

  contentComponent: UserDrawerComponents
}


);
const AdminAppStack = createStackNavigator({

  AdminDrawer: {
    screen: AdminDrawer,
    navigationOptions: {
      header: null,
    },
  }

});

//User Navigation classes 
const UserAppStack = createStackNavigator({

  UserDrawer: {
    screen: UserDrawer,
    navigationOptions: {
      header: null,
    },
  },

});

const LoginStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },

});

export default createAppContainer(createSwitchNavigator(
  {
    NavigationRouter: NavigationRouter,
    AdminAppStack: AdminAppStack,
    UserAppStack: UserAppStack,
    LoginStack: LoginStack,

  },
  {
    initialRouteName: 'NavigationRouter',
  }
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  home: {
    paddingLeft: 20,
  }
});