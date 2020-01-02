
/*
FileName:AdminManageProjects.js
Version:1.0.0
Purpose:dashboard for Projects ,Here shows the list of projects
Devloper:Rishitha,Harsha
*/
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar, Dimensions,Alert } from 'react-native';
import { Icon, Title, Button, Container, Content, Header, Right, Left, Body, Tab, Tabs, TabHeading, Footer, Item, Input, FooterTab } from 'native-base';

import AdminRequestedProjects from '../AdminComponents/AdminRequestedProjects';
import AdminApprovedProjects from '../AdminComponents/AdminApprovedProjects';

import getRequestedIdeas from '../Services/ProjectService';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import store from '../Store/index';

class AdminManageProjects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            role: '',
            userToken: '',
            cropcode: ''
        };
    }
 
    componentDidMount() {
      
    }
    
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
                    <Right></Right>
                </Header>
                <Tabs tabBarUnderlineStyle={{ borderBottomWidth: 0 }}>
                    <Tab heading={<TabHeading style={{ backgroundColor: '#00A2C1' }}><Text style={{ color: '#fff' }}>REQUESTED</Text></TabHeading>}>
                        <AdminRequestedProjects navigation={this.props.navigation} />
                    </Tab>
                    <Tab heading={<TabHeading style={{ backgroundColor: '#00A2C1' }}><Text style={{ color: '#fff' }}>APPROVED</Text></TabHeading>}>
                        <AdminApprovedProjects navigation={this.props.navigation} />
                    </Tab>
                </Tabs>
            </Container>
        );
    }

}

function mapStateToProps(state) {
  
    return { userData: state };

}

export default connect(mapStateToProps,null)(AdminManageProjects);
