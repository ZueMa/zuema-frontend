import React, { Component } from 'react'
import { products } from './Store'

class Product extends Component {
  render() {
    return(
      <div>
        <p>{products[this.props.match.params.id].name}</p>
        <p>{products[this.props.match.params.id].detail}</p>
        <p>{products[this.props.match.params.id].price}</p>
      </div>
    )
  }
}

export default Product;