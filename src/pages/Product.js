import React, { Component } from 'react'
import { products } from './Store'
import '../stylesheets/product.css'

class Product extends Component {
  constructor(props) {
    super(props)
    this.role = 'buyer'
  }

  render() {
    let component = null
    if (this.role === 'buyer') {
      component = (
        <div className="container-fluid product-height">
          <div className="row product-style-div">
            <div className="col-md-6 no-padding image-side">
              <div className="product-full-image"></div>
            </div>
            <div className="col-md-6 text-side">
              <div className="text-head">
                {products[this.props.match.params.id].name}
                <div className="line-rectangle"></div>
              </div>
              <div className="product-full-info">
                <p className="product-text">{products[this.props.match.params.id].detail}</p>
                <div className="product-price">{products[this.props.match.params.id].price} BAHT</div>
                <p className="product-stock">Only {products[this.props.match.params.id].stock} left in stock</p>
              </div>
              <button className="btn btn-add-cart">ADD TO CART</button>
            </div>
          </div>
        </div>
      ) 
    } else if (this.role === 'seller') {

    }
    return(
      <div className="product">
        {component}
      </div>
    )
  }
}

export default Product;