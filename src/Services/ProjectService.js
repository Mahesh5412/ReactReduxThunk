
import GetRequestedProjects from '../Actions/ProjectActions';
import { API } from "../WebServices/RestClient";


 export default function getRequestedIdeas(role, userToken, cropcode){

  return dispatch => {
    return  fetch(API + 'getIdeas.php',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        crop: cropcode,
        action: 'requested',
        empId: userToken,
        userType: role
      })
    })
    .then((response) => {
      if(response.status < 300){
        response.json().then((responseJSON) => {
          //console.log("responseJSON",responseJSON);
          dispatch(GetRequestedProjects(responseJSON))
        })
      }
      else{
        response.json().then((responseJSON) => {
        })
      }
    })
    .catch((error) => {
      console.log("error",error);
    })
  }

}


