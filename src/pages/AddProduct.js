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

        <div id="wrapper" className="input-form">
            <div id="left-col">
              <p>PRODUCT NAME*</p>
              <input size="50"></input>
              <br/>
              <p>SHORT DESCRIPTION*</p>
              <input size="50"></input>
              <br/>
              <p>FULL DESCRIPTION*</p>
              <textarea id="input-text" cols="51" rows="6"></textarea>
            </div>
            <div id="right-col">
              <p>CHOOSE CATEGORY*</p>

              <select>
                <option>CLOTHES</option>
                <option>SPORTS</option>
                <option>KIDS</option>
                <option>IT</option>
                <option>GARDEN</option>
                <option>...</option>

              </select>

              <p>PRODUCT PRICE*</p>
              <input size="10"></input>
              <p>PRODUCT QTY*</p>
              <input size="10"></input>
              <p>PRODUCT IMAGE*</p>
              <a href={this.url} id="history">CHOOSE IMAGE</a>
              <br/>
              <a href={this.url} id="history">ADD PRODUCT</a>
            </div>
        </div>

      </div>

    )
  }

}

export default AddProduct;
