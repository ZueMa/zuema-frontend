import React, { Component } from 'react'

export default class NavComponent extends Component {
  constructor(props) {
    super(props);
    this.text = props.text;
    this.url = props.url;
    this.shape = props.shape;
  }

  render() {
    let button = undefined;
    if (this.shape === "circle") {
      button = <a href={this.url} className="NavContainer" style={{marginBottom:'50px'}}>
                 <div className="NavButtonCircle"></div>
                 <h5>{this.text}</h5>
               </a>
    } else {
        button = <a href={this.url} className="NavContainer">
                  <div className="NavButtonRec">
                    <h4>{this.text}</h4>
                  </div>
                </a>
    }
    return(
      <div>
        {button}
      </div>
    )
  }
}