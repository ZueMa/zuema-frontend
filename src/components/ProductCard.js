import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import axios from 'axios'
import { connect } from 'react-redux'

class ProductCard extends Component {
  handleOnClick = () => {
     axios.post('http://localhost:8000/buyers/'+ this.props.user_id +'/cart/items/',{
        product_id: this.props.id
      })
      .then((res) => {
        swal({
          title: "Product Added!",
          icon: "success",
        });
      })
  }

  render() {
    return (
      <div className="card">
        <div className="product-card">
          <Link to={`/products/${this.props.id}`} className="product-img">
          </Link>
          <div className="product-info">
            <div>
              <div className="product-name">{this.props.name}</div>
              <div className="product-detail">{this.props.detail}</div> 
            </div>
            <div className="product-price flex">
              <div>
                {this.props.price.toFixed(2)}
              </div>
              <div className="text-right">
                <i className="fa fa-cart-plus fa-lg pointer" onClick={this.handleOnClick}></i>
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
  }
}

export default connect(mapStateToProps)(ProductCard)
