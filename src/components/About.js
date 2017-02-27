import React, { Component } from 'react';
import { Row, Col} from 'react-bootstrap'

export default class About extends Component {

  render() {
    return(

      <div>
        <p className="logoWelcome">Haven</p>
        <Col className="col-md-8 col-md-offset-4">
          <h3 className="center">Haven offers a quieter space for people to connect.</h3>
          <h3 className ="center">Create a board and post content without being interrupted by ads and other internet noise.</h3>
        </Col>
      </div>

    )
  }
}
