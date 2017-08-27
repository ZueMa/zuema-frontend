import React, { Component } from 'react'
import '../stylesheets/addproduct.css'

class AddProduct extends Component {

  render() {
    return(
      <div className="container-box">

        <div className="text-head">ADD YOUR PRODUCT
          <div className="line-rectangle"></div>
          <p id="type">SELLER</p>
        </div>

        <div className="input-form">
          <p>PRODUCT NAME*</p>
          <input></input>
        </div>
        <div className="input-form">
          <p>SHORT DESCRIPTION*</p>
          <input></input>
        </div>
        <div className="input-form">
          <p>FULL DESCRIPTION*</p>
          <input></input>
        </div>

      </div>

    )
  }

}

export default AddProduct;
