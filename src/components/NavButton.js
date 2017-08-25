import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class NavButton extends Component {
  constructor(props) {
    super(props);
    this.text = props.text;
    this.url = props.url;
    this.shape = props.shape;
  }

  render() {
    let button = undefined;
    if (this.shape === "circle") {
      button = (
        <Link to={this.url} className="NavContainer" style={{marginBottom:'50px'}} onClick={() => this.props.increase()}>
          <div className="NavButtonCircle"></div>
          <h5>{this.text}</h5>
        </Link>
      )
    } else {
      button = (
        <Link to={this.url} className="NavContainer" onClick={() => this.props.increase()}>
          <div className="NavButtonRec">
            <h4>{this.text}</h4>
          </div>
        </Link>
      )
    }
    return(
      <div>
        {button}
      </div>
    )
  }
}

export default NavButton;