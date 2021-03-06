import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { push } from 'react-router-redux'
import swal from 'sweetalert'
import axios from 'axios'
import { connect } from 'react-redux'

class ProductCard extends Component {
  handleOnClick = () => {
    if (this.props.user_id !== '') {
      axios.post('http://localhost:8000/buyers/'+ this.props.user_id +'/cart/items/',{
        product_id: this.props.id
      })
      .then((res) => {
        swal({
          title: "Product Added!",
          icon: "success",
        });
      })
      .catch(() => {
        swal({
          title: "This Product Is Already Added!",
          icon: "error"
        })
      })
    } else {
      swal({
        title: "Please Login First!",
        icon: "error",
      })
      .then(() => {
        this.props.push('/login')
      })
    }
  }

  render() {
    let cart = ''
    if (this.props.user_type !== 'seller') {
      cart = <i className="fa fa-cart-plus fa-lg pointer" onClick={this.handleOnClick}></i>
    } 
    return (
      <div className="card">
        <div className="product-card">
          <Link to={`/products/${this.props.id}`} className="product-img">
            <img src={this.props.image} className="sm-img" alt="img"/>
          </Link>
          <div className="product-info">
            <div>
              <div className="product-name">{this.props.name}</div>
              <div className="product-detail">{this.props.detail}</div> 
            </div>
            <div className="product-price flex">
              <div>
                {Number(this.props.price).toFixed(2)}
              </div>
              <div className="text-right">
                {cart} 
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user_id: state.cookie.id,
    user_type: state.cookie.type,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    push: (url) => dispatch(push(url)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)
