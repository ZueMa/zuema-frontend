import React, { Component } from 'react'
import '../stylesheets/product.css'
import { connect } from 'react-redux'

class Product extends Component {
  constructor(props) {
    super(props)
    this.role = 'seller'
    this.products = props.products
  }

  handleAddCart = (e) => {

  }

  handleEdit = (e) => {

  }

  handleRemove = (e) => {

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
              <div className="text-header">
                {this.products[this.props.match.params.id-1].name}
                <div className="line-rectangle"></div>
              </div>
              <div className="product-full-info">
                <p className="product-text">{this.products[this.props.match.params.id-1].short_description}</p>
                <div className="price">{this.products[this.props.match.params.id-1].price} BAHT</div>
                <p className="product-stock">Only {this.products[this.props.match.params.id-1].stock} left in stock</p>
              </div>
              <button className="btn btn-add-cart" onClick={this.handleAddCart}>ADD TO CART</button>
            </div>
          </div>
        </div>
      ) 
    } else if (this.role === 'seller') {
      component = (
        <div className="container-fluid product-height">
          <div className="row product-style-div">
            <div className="col-md-6 no-padding image-side">
              <div className="product-full-image"></div>
            </div>
            <div className="col-md-6 text-side">
              <div className="text-header">
                {this.products[this.props.match.params.id-1].name}
                <div className="line-rectangle"></div>
              </div>
              <div className="product-full-info">
                <p className="product-text">{this.products[this.props.match.params.id-1].short_description}</p>
                <div className="price">{this.products[this.props.match.params.id-1].price} BAHT</div>
                <p className="product-stock">Only {this.products[this.props.match.params.id-1].stock} left in stock</p>
              </div>
              <div className="button-container">
                <button className="btn btn-edit" onClick={this.handleEdit}>EDIT</button>
                <button className="btn btn-remove" onClick={this.handleRemove}>REMOVE</button>
              </div>
            </div>
          </div>
        </div>
      )
    }
    return(
      <div className="product">
        {component}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.storage.products,
  }
}

export default connect(mapStateToProps)(Product);