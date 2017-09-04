import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'

class NavButton extends Component {
  constructor(props) {
    super(props);
    this.text = props.text;
    this.url = props.url;
    this.shape = props.shape;
    this.icon = props.icon;
  }

  render() {
    let button = undefined;
    if (this.shape === "circle") {
      button = (
        <div className="nav-container nav-add-margin" onClick={() => this.props.push(this.url)}>
          <i className={this.icon + ` fa-4x`}></i>
          <h5>{this.text}</h5>
        </div>
      )
    } else {
      button = (
        <div className="nav-container" onClick={() => this.props.push(this.url)}>
          <div className="nav-button-rec">
            <h4>{this.text}</h4>
          </div>
        </div>
      )
    }
    return(
      <div>
        {button}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return{
    push: (url) => dispatch(push(url))
  }
}

export default connect(null, mapDispatchToProps)(NavButton);