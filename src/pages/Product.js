import React, { Component } from 'react'
import '../stylesheets/product.css'
import { connect } from 'react-redux'
import axios from 'axios'
import { updateProduct } from '../actions/productAction'

class Product extends Component {
  constructor(props) {
    super(props)
    this.role = 'seller'
    this.products = props.products
  }

  componentDidMount() {
    axios.get('http://localhost:8000/products/' + this.products[this.props.match.params.id-1].product_id)
    .then((res) => {
      this.props.updateProduct(res.data)
    })
    .catch((res) => {
      console.error(res) 
    })
  }

  handleAddCart = (e) => {

  }

  handleEdit = (e) => {

  }

  handleRemove = (e) => {

  }

  render() {
    let component = null
    if (this.product !== '') {
      if (this.role === 'buyer') {
        component = (
          <div className="container-fluid product-height">
            <div className="row product-style-div">
              <div className="col-md-6 no-padding image-side">
                <div className="product-full-image"></div>
              </div>
              <div className="col-md-6 text-side">
                <div className="text-header">
                  {this.props.product.name}
                  <div className="line-rectangle"></div>
                </div>
                <div className="product-full-info">
                  <p className="product-text">{this.props.product.full_description}</p>
                  <div className="price">{this.props.product.price} BAHT</div>
                  <p className="product-stock">Only {this.props.product.num_stocks} left in stock</p>
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
                  {this.props.product.name}
                  <div className="line-rectangle"></div>
                </div>
                <div className="product-full-info">
                  <p className="product-text">{this.props.product.full_description}</p>
                  <div className="price">{this.props.product.price} BAHT</div>
                  <p className="product-stock">Only {this.props.product.num_stocks} left in stock</p>
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
    product: state.product.data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateProduct: (product) => dispatch(updateProduct(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);