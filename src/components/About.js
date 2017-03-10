import React, { Component } from 'react';
import { Row, Col} from 'react-bootstrap'

export default class About extends Component {

  render() {
    return(

      <div>
        <p className="logo text-center fade">Haven</p>
        <Col className="col-md-6 col-md-offset-3">
          <h3 className="center"></h3>
          <div className="lightBoxAbout">
          <h3 className ="aboutCopy center">
            <p>Built with minimalism in mind,
            Haven offers a quieter space to connect.</p>
            <p>Create and share content free from ads, algorithms, and trends.</p>
          </h3>
        </div>
        </Col>
      </div>

    )
  }
}
