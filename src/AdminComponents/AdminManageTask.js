
/*
FileName:AdminManageTask.js
Version:1.0.0
Purpose:Shows the list pending and completed tasks list(dashboard for maintasks)
Devloper:Rishitha,Harsha
*/
import React, { Component } from 'react';
import { TextInput, Platform, StyleSheet, Text, View, Image, StatusBar, Dimensions, Alert } from 'react-native';
import { Title, Icon, Button, Container, Content, Header, Right, Left, Body, Tab, Tabs, TabHeading, Footer, Item, Input, FooterTab } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

import AdminPendingManageTask from '../AdminComponents/AdminPendingManageTask';
import AdminCompletedManageTask from '../AdminComponents/AdminCompletedManageTask';


export default class AdminManageTask extends Component {


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
                        <Icon name="md-menu" style={{ color: '#fff', }} onPress={() =>
                            this.props.navigation.toggleDrawer()} />
                    </Left>
                    <Body>
                        <Title style={{ color: '#fff', fontWeight: '600' }}>Manage Task</Title>
                    </Body>
                    <Right>
                        <Image source={require('../Images/home.png')} onPress={() =>
                            this.props.navigation.navigate('AdminManageProjects')} />
                    </Right>
                </Header>
                <Tabs tabBarUnderlineStyle={{ borderBottomWidth: 0 }}>
                    <Tab heading={<TabHeading style={{ backgroundColor: '#00A2C1' }}><Text style={{ color: '#fff' }}>PENDING</Text></TabHeading>}>
                        <AdminPendingManageTask navigation={this.props.navigation} />
                    </Tab>

                    <Tab heading={<TabHeading style={{ backgroundColor: '#00A2C1' }}><Text style={{ color: '#fff' }}>COMPLETED</Text></TabHeading>}>
                        <AdminCompletedManageTask navigation={this.props.navigation} />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}
