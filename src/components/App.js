import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Grid } from 'react-bootstrap'
import Nav from './Nav'
import $ from 'jquery'

class App extends Component {

  render() {
    return (
        <Grid>
          <Nav />
          <div className="childrens">
            {this.props.children}
          </div>
        </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

export default connect(mapStateToProps)(App)
