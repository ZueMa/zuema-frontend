import React, { Component } from 'react'
import axios from 'axios'
import '../stylesheets/addproduct.css'

class AddProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product_name: '',
      short_des: '',
      full_des: '',
      price: '',
      category: '',
      quantity: '',
    }
  }

  addProduct(e) {
    console.log(e)
    axios.post('http://localhost:8000/addproduct/', {
      product_name: this.state.product_name,
      short_des: this.state.short_des,
      full_des: this.state.full_des,
      price: this.state.price,
      category: this.state.category,
      quantity: this.state.quantity
    })
    .then((response) => {
      console.log(response)
    })
    .catch((response) => {
      console.error(response) 
    })
  }

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
              <input name="product_name" size="50" onChange={(e) => this.setState({price: e.target.value})}/>
              <br/>
              <p>SHORT DESCRIPTION*</p>
              <input name="short_des" size="50" onChange={(e) => this.setState({short_des: e.target.value})}/>
              <br/>
              <p>FULL DESCRIPTION*</p>
              <textarea name="full_des" id="input-text" cols="51" rows="6" onChange={(e) => this.setState({full_des: e.target.value})}/>
            </div>

            <div id="right-col">
              <p>CHOOSE CATEGORY*</p>
              <select name="category" onChange={(e) => this.setState({category: e.target.value})}>
                <option>CLOTHES</option>
                <option>SPORTS</option>
                <option>KIDS</option>
                <option>IT</option>
                <option>GARDEN</option>
                <option>...</option>
              </select>
              <p>PRODUCT PRICE*</p>
              <input name="price" type="number" size="5" onChange={(e) => this.setState({price: e.target.value})}/>
              <p>PRODUCT QTY*</p>
              <input name="quantity" type="number" size="5" onChange={(e) => this.setState({quantity: e.target.value})}/>
              <p>PRODUCT IMAGE*</p>
              <a href={this.url} id="history">CHOOSE IMAGE</a>
              <br/>
              <button onClick={(e) => this.addProduct(e)}>ADD PRODUCT</button>
            </div>

        </div>
      </div>
    )
  }
}

export default AddProduct;
