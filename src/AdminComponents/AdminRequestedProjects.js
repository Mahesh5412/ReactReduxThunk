
/*
FileName:AdminRequestedrojects.js
Version:1.0.0
Purpose:List of Projects or ideas and shows list of projects
Devloper:Rishitha,Harsha
*/
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, TouchableOpacity, FlatList, TextInput, Alert, ToastAndroid } from 'react-native';
import { Container, Content, Item, Input } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import getRequestedIdeas from '../Services/ProjectService';
import { connect } from 'react-redux';

FOOTER_MAX_HEIGHT = 50
FOOTER_MIN_HEIGHT = 40

class RequestedList extends Component {

    render() {
        const { item } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.AdminProjectInfo}>
                    <View style={styles.signup}>
                        <View style={[styles.buttonContainer, styles.signupButton]} >
                            <View style={styles.box}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.signUpText0} >Project No:</Text>
                                    <Text style={styles.signUpText1} >{item.idea_id}</Text>
                                </View>
                                <Text style={styles.signUpText2} > {item.created_on}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', paddingRight: 25, }}>
                                <Text style={styles.signUpText4} >Title:</Text>
                                <Text style={styles.signUpText3} >{item.idea_title}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', paddingRight: 25, marginTop: 5 }}>
                                <Text style={{ fontSize: 12, paddingTop: 10, color: '#767676', alignItems: 'center', }} >Requested By:</Text>
                                <Text style={{ fontSize: 12, paddingTop: 10, color: '#767676', alignItems: 'center', }} >{item.userName}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#fff', height: 5 }}>

                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

class AdminRequestedProjects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: [],
            isFetching: false,
            open: false,
            ProjectTitle: "",
            ProjectDescription: "",
            error1: '', 
            error2: '',
            role:'',
            userToken:'',
            cropcode:''
        };
    }

    componentDidMount(){
    }

    render() {
        // console.warn(JSON.stringify(this.props.userData.login.state.data));
        return (
            <Container style={{ height: Dimensions.get('window').height }}>
                <View style={styles.MainContainer}>
                    <View style={{ height: '91%' }}>
                        <FlatList
                            extraData={this.state}
                            keyExtractor={this._keyExtractor}
                            renderItem={this._renderItem}
                            data={this.props.userData.login.state.data}
                            onRefresh={() => this.onRefresh()}
                            refreshing={this.state.isFetching}
                            ItemSeparatorComponent={this.FlatListItemSeparator}
                            renderItem={({ item, index }) =>
                                <View>
                                    <RequestedList navigation={this.props.navigation}
                                        item={item} />
                                </View>
                            }
                            keyExtractor={item => item.id}
                            ListEmptyComponent={this._listEmptyComponent}
                        />

                    </View>

                    <TouchableOpacity onPress={this.openModal} style={styles.bottomView}>
                        <View style={styles.bottomView} >
                            <Icon
                                name='lightbulb-o'
                                color='white'
                                type='MaterialCommunityIcons'
                                size={30}
                            />
                            <Text style={styles.textStyle}> ADD PROJECT</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create(
    {
        MainContainer:
        {
            flex: 1,
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height
        },

        bottomView: {
            flexDirection: 'row',
            justifyContent: 'center',
            position: 'absolute',
            height: FOOTER_MAX_HEIGHT,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'black',
            alignItems: 'center'
        },

        textStyle: {

            color: '#fff',
            paddingLeft: 5,
            paddingRight: 5,
            backgroundColor: '#00A2C1',
            fontSize: 22,
            marginLeft: 5,
            borderRadius: 5

        },
        container: {
            flex: 1,
            width: '98%',
            paddingLeft: hp('2%'),
            backgroundColor: '#f8f8f8'
        },
        footer: {
            position: 'absolute',
            flex: 0.1,
            left: 0,
            right: 0,
            bottom: -10,
            backgroundColor: 'green',
            flexDirection: 'row',
            height: 80,
            alignItems: 'center',
        },
        bottomButtons: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
        },
        footerText: {
            color: 'white',
            fontWeight: 'bold',
            alignItems: 'center',
            fontSize: 18,
        },
        buttonContainer: {
            width: wp('90%'),
            alignSelf: 'baseline',
            marginBottom: 10,
            color: '#d2691e',
            marginLeft: 4,




        },
        signupButton: {


        },
        subcontainer: {
            flex: 2,
            flexDirection: 'row',
            paddingTop: 40
        },
        signUpText0: {
            fontSize: 13,
            color: 'green',
            paddingTop: 10,
            fontWeight: 'bold'

        },
        signUpText1: {
            fontSize: 13,
            color: 'green',
            paddingTop: 10,
            fontWeight: 'bold',
            paddingLeft: 10,
        },
        end: {

            alignItems: 'flex-end',

        },
        end1: {
            flex: 2,
            height: '50%',
            paddingTop: 20,
            justifyContent: 'space-between',

            flexDirection: 'row',
        },
        s: {
            justifyContent: 'center',

            backgroundColor: '#ed7070',
            shadowOffset: { width: 50, height: 50 },
            alignItems: 'center',
            width: wp('40%'),
            height: hp('12%'),

        },
        signUpText2: {
            fontSize: 10,
            marginLeft: 200,
            fontSize: 13,
            color: '#767676',
            paddingTop: 10,


        },
        signUpText3: {

            fontSize: 12,
            paddingTop: 10,
            paddingLeft: 10,

            alignItems: 'center',
        },

        signUpText4: {
            fontSize: 12,
            paddingTop: 10,
            alignItems: 'center',
        },
        signup: {
            color: "#FFF",
        },
        boxone: {
            flex: 1,
            marginTop: 5,
        },
        boxtwo: {
            flex: 1,
        },
        boxthree: {
            flex: 1,
        },
        box: {
            flexDirection: 'row',
            position: 'relative',
            marginBottom: 10,
        },
        signUpText: {
            fontSize: 20,
            justifyContent: 'center',
            color: 'white',
            alignSelf: 'center',

        },
        bodytext: {
            margin: 5,
            backgroundColor: 'green',
            padding: Platform.OS === 'ios' ? 0 : 20,
            height: 30,
            alignItems: "center",
            justifyContent: 'center',
            width: Platform.OS === 'ios' ? 100 : 0,


        },
        bodytext1: {
            margin: 5,
            backgroundColor: 'red',
            padding: Platform.OS === 'ios' ? 0 : 20,
            height: 30,
            alignItems: "center",
            justifyContent: 'center',
            width: Platform.OS === 'ios' ? 100 : 0,


        },
    });

    function mapStateToProps(state) {
        console.log(state);
        return { userData  :state };
       }

       const mapDispatchToProps = dispatch => ({

    
        getRequestedIdeas: (role, userToken, cropcode) => dispatch(getRequestedIdeas(role, userToken, cropcode))
    });

      export default connect(mapStateToProps,mapDispatchToProps)(AdminRequestedProjects);