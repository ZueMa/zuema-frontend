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
      button = <a href={this.url} className="NavContainer">
                 <div className="NavButtonCircle"></div>
                 <h2>{this.text}</h2>
               </a>
    } else {
        button = <a href={this.url} className="NavContainer">
                  <div className="NavButtonRec">
                    <h2>{this.text}</h2>
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