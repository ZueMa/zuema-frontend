import React, { Component } from 'react'
import axios from 'axios'
import '../stylesheets/addproduct.css'

class AddProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      short_description: '',
      full_description: '',
      price: '',
      category: '',
      num_stocks: '',
      image: [],
    }
  }

  addProduct(e) {
    console.log(e)
    axios.post('https://private-00f7e-zuema.apiary-mock.com/sellers/me/products', {
      name: this.state.name,
      category: this.state.category,  
      price: this.state.price,     
      num_stocks: this.state.num_stock,      
      short_description: this.state.short_description,
      full_description: this.state.full_description,
      image: this.state.image
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
              <input name="name" onChange={(e) => this.setState({name: e.target.value})}/>
              <br/>
              <p>SHORT DESCRIPTION*</p>
              <input name="short_description" onChange={(e) => this.setState({short_description: e.target.value})}/>
              <br/>
              <p>FULL DESCRIPTION*</p>
              <textarea name="full_description" id="input-text" cols="51" rows="6" onChange={(e) => this.setState({full_description: e.target.value})}/>
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
              <input name="num_stocks" type="number" size="5" onChange={(e) => this.setState({num_stocks: e.target.value})}/>
              <p>PRODUCT IMAGE*</p>
                <input type="file" name="image" onChange={(e) => this.setState({image: e.target.value.replace("C:\\fakepath\\", "")})}/>
              <div>
              <br/>
              <button onClick={(e) => this.addProduct(e)}>ADD PRODUCT</button>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default AddProduct;
