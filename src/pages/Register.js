import React, { Component } from 'react'

class Register extends Component {
  render() {
    return(
      <div>
        <span className="text-head">REGISTER</span>
        <div id="container-box">
            <button type="button" className="btn btn-seller">SELLER</button>
            <button type="button" className="btn btn-buyer">BUYER</button>
        </div>
      </div>
    )
  }
}

export default Register;
