import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Link} from 'react-router'
import { Row, Col, FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap'
import postMethod from '../actions/postMethod'
import boardRequest from '../actions/boardRequest'
// import boardDelete from '../actions/boardDelete'
import createBoard from '../actions/createBoard'
import deleteUserAccount from '../actions/deleteUserAccount'
import updateName from '../actions/updateName'
// import auth from '../../lib/auth'

class Profile extends Component {

  constructor(props){
    super(props);
    this.state = {
      title: "",
      otherUserEmail: "",
      name: ""
    }
  }

  handleOnClick(event) {
    event.preventDefault();
    this.props.boardRequest(event.target.attributes.value.value);
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value})
  }

  handleOtherUserChange(event) {
    this.setState({otherUserEmail: event.target.value})
  }

  handleCreate(event) {
    event.preventDefault()
    // passing in state, which is just title, as well as current user id
    this.props.createBoard(this.state.title, this.state.otherUserEmail, this.props.currentUser.id)
    this.setState({title: '', otherUserEmail: ''})
  }

  handleDeleteAccount(event) {
    this.props.deleteUserAccount(this.props.currentUser.id)

  }

  handleEditUserName(event) {
    event.preventDefault();
    this.props.updateName(this.state.name, this.props.currentUser.id)

  }

  handleUserNameChange(event) {
    this.setState({name: event.target.value})
  }

  handleEditDropdown(event){
    this.props.postMethod("editing")
  }


  dropdown(method){
    if (method === "editing") {
      return (<div className="text-left">
        <Col lg={11} md={11} sm={11} xs={11}>
          <form className="spaceTopS" onSubmit={this.handleEditUserName.bind(this)}>
            <FormGroup>
              <ControlLabel className= "whiteText">Change Name</ControlLabel>
              <FormControl type="text" onChange={this.handleUserNameChange.bind(this)} />
            </FormGroup>
            <Button type='submit'>Edit</Button>
          </form>
        </Col>
        <Col lg={1} md={1} sm={1} xs={1} className="deleteBoard">
          <Button onClick={this.handleDeleteAccount.bind(this)} bsStyle="danger">Delete Account</Button>
        </Col>
    </div>)
    } else {
      return(<div></div>)
    }

  }

  render(){
    let dropdownEdit = this.dropdown(this.props.editing);
    let boards = this.props.boards.map((board) => {
      return (
        <h4><Button className="boardListButtons unifrom btn-lg" onClick={this.handleOnClick.bind(this)} value={board.id}>{board.title}</Button></h4>
    )
    }
  )


    return(
          <div>
            <h1 className="welcome spaceTopSM">Welcome, {this.props.currentUser.name}.</h1>
            <strong><p className="center spaceTopSM lesserHeadings spaceBottomS">Want to create a new board?</p></strong>

              <Row className="form-horizontal">
                  <form onSubmit={this.handleCreate.bind(this)} value={this.props.currentUser.id}>
                    <FormGroup>
                      <FormControl className="unifrom center input-lg" type="text" placeholder="Enter your email." onChange={this.handleOtherUserChange.bind(this)} value={this.state.otherUserEmail} />
                    </FormGroup>
                    <FormGroup>
                      <FormControl className="unifrom center input-lg" type="text" placeholder="Enter other person's email." onChange={this.handleOtherUserChange.bind(this)} value={this.state.otherUserEmail} />
                    </FormGroup>
                    <FormGroup>
                      <Button className="newBoardButton uniform center btn-lg" type="submit">
                        New Board
                      </Button>
                    </FormGroup>
                    <FormGroup>

                  <strong><p className="center spaceTopSM lesserHeadings spaceBottomS">Your Boards</p></strong>
                    <div>
                        {boards}
                    </div>
                    </FormGroup>
                    </form>
              </Row>
            </div>
          )
  }
}

function mapStateToProps(state) {
  return {currentUser: state.currentUser, boards: state.boards, editing: state.status.method}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ boardRequest, createBoard, deleteUserAccount, postMethod, updateName}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

// const connectingComponent = connect(mapStateToProps)(Profile)
//
// export default auth(connectingComponent)
