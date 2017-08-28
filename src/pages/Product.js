import React, { Component } from 'react'
import { products } from './Store'

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

          <div className="top-bar row">
            <h3>
              <i className="fa fa-search icon-margin"></i>
              SEARCH
            </h3>
          </div>

          <div className="row product-style-div">
            <div className="col-md-6 no-padding image-side">
              <div className="product-full-image"></div>
            </div>
            <div className="col-md-6 no-padding text-side">
              <div className="container">
                <p>{products[this.props.match.params.id].name}</p>
                <p>{products[this.props.match.params.id].detail}</p>
                <p>{products[this.props.match.params.id].price}</p>
              </div>
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