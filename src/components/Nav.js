import React, {Component} from 'react'
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Nav extends Component {

  render(){
    return(
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="collapse navbar-collapse">
                  <ul className="nav navbar-nav center">
                    <li><Link className="Roboto" href="/">HOME</Link></li>
                    <li><Link className="Roboto" href="/signup">SIGN UP</Link></li>
                    <li><Link className="Roboto" href="/about">ABOUT</Link></li>
                  </ul>
                </div>
              </div>
            </nav>
          )
        }
      }


function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

export default connect(mapStateToProps)(Nav)
