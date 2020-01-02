import React, { Component } from 'react';
import getRequestedIdeas from '../Services/ProjectService';
import {StackActions,NavigationActions} from 'react-navigation';
import { AppRegistry, View ,Text, TouchableOpacity,Image,StyleSheet} from 'react-native';
import { API } from "../WebServices/RestClient";
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';

const resetAction=StackActions.reset({
    index:0,
    actions:[
       NavigationActions.navigate({routeName:'NavigationRouter'})
    ]
})


class Splash extends Component {
 

  constructor(props){
    super(props);
    this.state={
      role:'',
      userToken:'',
      cropcode:'',
      empId:''
    }
 
  }
  
  componentDidMount(){
      setTimeout(
          ()=>{
              this.props.navigation.dispatch(resetAction)
          },
        5000
      );
      this.getData();
  }

  getData(){
    AsyncStorage.multiGet(["cropcode", "emp_role","empId"], (err, response) => {
      const cropcode = response[0][1];
      const role = response[1][1];
      const empId=response[2][1];
      this.props.getRequestedIdeas(role,empId,cropcode);
    });    
  }

render() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
      <Image style={{ width: '40%', height: '30%' }} source={require('../Images/splashnew.jpeg')} />
      <Text style={styles.text}>Powered by Cadrac Labsss</Text>
      <Text></Text>
      <Text style={styles.text1}>1.0.3   11-09-2019</Text>
    </View>
  );
}
}
const styles = StyleSheet.create({

text: {

  textAlign: 'center',
  fontSize: 20,
  color: 'black',
},
text: {

  textAlign: 'center',
  fontSize: 15,
  color: 'black',


},
})

function mapStateToProps(state) {
  return { userData  :state };
}

const mapDispatchToProps = dispatch => ({

  getRequestedIdeas: (role, userToken, cropcode) => dispatch(getRequestedIdeas(role, userToken, cropcode))
});
export default connect(mapStateToProps, mapDispatchToProps)(Splash);

