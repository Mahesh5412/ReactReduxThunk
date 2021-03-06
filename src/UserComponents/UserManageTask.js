
/*
FileName:UserManageTask.js
Version:1.0.0
Purpose:Getting the List of user managetaks lsit 
Devloper:Rishitha,Harsha
*/

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, Dimensions, Alert, Image } from 'react-native';
import { Icon, Title, Button, Container, Content, Header, Right, Left, Body, Tab, Tabs, TabHeading, Footer, Item, Input, FooterTab } from 'native-base';

import AsyncStorage from '@react-native-community/async-storage';

import UserPendingManageTask from '../UserComponents/UserPendingManageTask';
import UserCompletedManageTask from '../UserComponents/UserCompletedManageTask';


export default class UserManageTask extends Component {


    render() {
        return (
            <Container>
                <Header
                    androidStatusBarColor="#00A2C1"

                    style={{
                        backgroundColor: '#00A2C1',
                        height: 80,
                        width: Dimensions.get('window').width,
                        borderBottomColor: '#ffffff',
                        justifyContent: 'space-between',
                    }}>
                    <Left>
                        <Icon name="md-menu" style={{ color: '#fff' }} onPress={() =>
                            this.props.navigation.toggleDrawer()} />
                    </Left>
                    <Body>
                        <Title style={{ color: '#fff', fontWeight: '600' }}>Manage Task</Title>
                    </Body>

                    <Right>
                        <Image source={require('../Images/home.png')}
                            onPress={() => this.props.navigation.navigate('UserProfile')} />
                    </Right>

                </Header>

                <Tabs tabBarUnderlineStyle={{ borderBottomWidth: 0 }}>
                    <Tab heading={<TabHeading style={{ backgroundColor: '#00A2C1' }}><Text style={{ color: '#fff' }}>PENDING</Text></TabHeading>}>
                        <UserPendingManageTask navigation={this.props.navigation} />
                    </Tab>

                    <Tab heading={<TabHeading style={{ backgroundColor: '#00A2C1' }}><Text style={{ color: '#fff' }}>COMPLETED</Text></TabHeading>}>
                        <UserCompletedManageTask navigation={this.props.navigation} />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}