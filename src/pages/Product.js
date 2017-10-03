import React, { Component } from 'react'
import '../stylesheets/product.css'
import { connect } from 'react-redux'
import axios from 'axios'
import { push } from 'react-router-redux'
import { updateProduct } from '../actions/productAction'
import swal from 'sweetalert'

class Product extends Component {
  constructor(props) {
    super(props);
    this.products = props.products 
  }

  componentDidMount() {
    axios.get('http://localhost:8000/products/' + this.products[this.props.match.params.id].product_id)
    .then((res) => {
      this.props.updateProduct(res.data)
    })
    .catch((res) => {
      console.error(res) 
    })
  }

  handleAddCart = (e) => {
    if (this.props.id === '') {
      swal({
        title: "Please Login First!",
        icon: "Error",
      });
    } else {
      axios.post('http://localhost:8000/buyers/'+ this.props.id +'/cart/items/',{
        product_id: this.props.product.product_id
      })
      .then((res) => {
        swal({
          title: "Product Added!",
          icon: "success",
        });
      })
    }
  }

  handleRemove = (e) => {
    axios.delete('http://localhost:8000/sellers/' + this.props.id + '/products/' + this.props.product.product_id)
    .catch((res) => {
      console.log(res)
    })
  }

  render() {
    let component = null
    if (this.product !== '') {
      if (this.props.type === 'seller') {
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
                  <div className="price">{this.props.product.price.toFixed(2)} BAHT</div>
                  <p className="product-stock">Only {this.props.product.num_stocks} left in stock</p>
                </div>
                <div className="button-container">
                  <button className="btn btn-edit" onClick={() => this.props.push('/editproduct')}>EDIT</button>
                  <button className="btn btn-remove" onClick={this.handleRemove}>REMOVE</button>
                </div>
              </div>
            </div>
          </div>
        )
      } else {
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
    id: state.cookie.id,
    type: state.cookie.type,
    products: state.storage.products,
    product: state.product.data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateProduct: (product) => dispatch(updateProduct(product)),
    push: (url) => dispatch(push(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);