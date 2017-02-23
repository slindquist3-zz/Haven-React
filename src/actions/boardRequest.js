import { browserHistory } from 'react-router'
import $ from 'jquery'

export default function boardRequest(formValue) {
  return function(dispatch) {
  $.ajax({
     url: `https://haven-api-rails.herokuapp.com/boards/${formValue}`,
     type: 'GET'
  }).done(function(response){
    dispatch({type:"FETCH_BOARD", currentBoard: response.board})
    browserHistory.push('/board')
  })
  }
}
