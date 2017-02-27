import React, { Component } from 'react';
import { Row, Col} from 'react-bootstrap'

export default class About extends Component {

  render() {
    return(

      <div>
        <p className="logoWelcome">Haven</p>
        <Col className="col-md-6 col-md-offset-2">
          <h3 className="center"></h3>
          <h3 className="center">Haven offers a quiet space.</h3>
          <h4 className="center"></h4>
          <h4 className ="center"> Built with a minimalist approach to social media,
            Haven is a platform to connect one-on-one with the people who matter most to you.
            Create and share content free from ads, algorithms, and trends.</h4>
        </Col>
      </div>

    )
  }
}
