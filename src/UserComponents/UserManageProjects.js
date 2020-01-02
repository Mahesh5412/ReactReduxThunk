
/*
FileName:UserManagaProjects.js
Version:1.0.0
Purpose:Getting the List of Manage projects .
Devloper:Rishitha,Harsha
*/

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native';
import { Icon, Title, Button, Container, Content, Header, Right, Left, Body, Tab, Tabs, TabHeading, Footer, Item, Input, FooterTab } from 'native-base';

import UserRequestedProjects from '../UserComponents/UserRequestedProjects';
import UserApprovedProjects from '../UserComponents/UserApprovedProjects';

export default class UserManageProjects extends Component {
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
                        <Title style={{ color: '#fff', fontWeight: '600' }}>Manage Projects</Title>
                    </Body>

                </Header>
                <Tabs tabBarUnderlineStyle={{ borderBottomWidth: 0 }}>
                    <Tab heading={<TabHeading style={{ backgroundColor: '#00A2C1' }}><Text style={{ color: '#fff' }}>REQUESTED</Text></TabHeading>}>
                        <UserRequestedProjects navigation={this.props.navigation} />
                    </Tab>
                    <Tab heading={<TabHeading style={{ backgroundColor: '#00A2C1' }}><Text style={{ color: '#fff' }}>APPROVED</Text></TabHeading>}>
                        <UserApprovedProjects navigation={this.props.navigation} />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}