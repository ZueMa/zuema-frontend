import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'

class NavButton extends Component {
  render() {
    let button = undefined;
    if (this.props.shape === "circle") {
      let text = this.props.text.split(' ')
      button = (
        <div className="nav-container nav-add-margin" onClick={() => this.props.push(this.props.url)}>
          <i className={this.props.icon + ` fa-4x`}></i>
          <h5>{text[0]}</h5>
          <h5>{text[1]}</h5>
        </div>
      )
    } else {
      button = (
        <div className="nav-container" onClick={() => this.props.push(this.props.url)}>
          <div className="nav-button-rec" style={{backgroundColor: this.props.isPink ? '#FF6767':'#E57935'}}>
            <h4>{this.props.text}</h4>
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