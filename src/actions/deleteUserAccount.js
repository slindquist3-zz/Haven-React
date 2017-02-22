import $ from 'jquery'
import { browserHistory } from 'react-router'


export default function deleteUserAccount(userID){
  return function (dispatch) {
    $.ajax({
     url: `https://haven-api-rails.herokuapp.com/users/${userID}`,
     type: 'DELETE',
     data: {user_id: userID},
   }).done(function(response){
     dispatch({type:"LOGOUT_USER"})
     browserHistory.push('/')
   })
  }
}
