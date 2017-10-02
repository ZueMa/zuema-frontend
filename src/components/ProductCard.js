import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import axios from 'axios'
import { connect } from 'react-redux'

class ProductCard extends Component {
  constructor(props) {
    super(props);
      this.name = props.name
      this.detail = props.detail
      this.id = props.id
      this.price = props.price
  }

  handleOnClick = () => {
     axios.post('http://localhost:8000/buyers/'+ this.props.user_id +'/cart/items/',{
        product_id: this.id
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
          <Link to={`/products/${this.id}`} className="product-img">
          </Link>
          <div className="product-info">
            <div>
              <div className="product-name">{this.name}</div>
              <div className="product-detail">{this.detail}</div> 
            </div>
            <div className="product-price flex">
              <div>
                {this.price}
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
