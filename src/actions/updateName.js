import $ from 'jquery'

export default function updateName(name, currentUserID) {
  return function(dispatch) {
  $.ajax({
     url: `https://haven-rails-api.herokuapp.com/users/${currentUserID}`,
     type: 'PUT',
     data: { name: name, current_user_id: currentUserID },
    //  success: () => { return{type:"FETCH_BOARD", payload: board}}
  }).done(function(response){
    dispatch({type: 'UPDATE_NAME', name: response.name})
    })
  }
}
