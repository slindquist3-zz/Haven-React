// import { browserHistory } from 'react-router'
import $ from 'jquery'

export default function createBoard(boardTitle, otherUserEmail, userID) {
  return function(dispatch) {
  $.ajax({
     url: `https://cors-anywhere.herokuapp.com/https://haven-api-rails.herokuapp.com/boards`,
     type: 'POST',
     data: { title: boardTitle, other_user_email: otherUserEmail, user_id: userID }
  }).done(function(response){
    dispatch({type:"UPDATE_USER_BOARDS", boards: response.boards })
  })
  }
}
