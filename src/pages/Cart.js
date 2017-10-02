import React, { Component } from 'react'
import '../stylesheets/cart.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateCart } from '../actions/cartAction'
import ProductTableListCart from '../components/ProductTableListCart'


class Cart extends Component {
  handleConnectApi = () => {
    axios.get('http://localhost:8000/buyers/' + this.props.id + '/cart/')
    .then((res) => {
      console.log("new data: " + res.data)
      this.props.updateCart(res.data.cart_id, res.data.total_price, res.data.items)
    })
    .catch((res) => {
      console.error(res)
    })
  }

  componentDidMount(e) {
    this.handleConnectApi();
  }

  checkoutCart(e) {
    axios.post('https://localhost:8000/buyers/' + this.props.id + '/cart/purchase/')
    .then((res) => {
      console.log(res)
    })
    .catch((res) => {
      console.log(res)
    })
  }

  render() {
    console.log('render')
    return(
      <div className="container cart">
        <div className="head-cart-page row">
          <div className="col-md-6">
            <div className="head">YOUR SHOPPING CART</div>
            <div className="color_line_head"></div><br />
          </div>
          <div className="col-md-6">
            <Link to={'/purchasehistorybuyer'}><button className="btn checkout-cart-btn" onClick={(e) => {this.checkoutCart(e)}}>CHECKOUT</button></Link>
          </div>
        </div>
        
        <table className="table table-hover">
          <thead>
            <tr>
              <th></th>
              <th className="head_table_title">PRODUCT NAME</th>
              <th className="head_table_title_center">PRICE</th>
              <th className="head_table_title_center">QUILITY</th>
              <th className="head_table_title_center">DELETE</th>
            </tr>
          </thead>

          <tbody>
            {this.props.cartList.map((itm, id) => {
              return <ProductTableListCart 
              product_id={itm.product_id}
              name={itm.name}
              short_descrition={itm.short_descrition}
              price={itm.price}
              quantity={itm.num_items}
              key={itm.product_id} />
            })}
          </tbody>

          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>TOTAL</td>
              <td>{this.props.total_price}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart_id: state.cart.cart_id,
    total_price: state.cart.total_price,
    cartList: state.cart.cartList,
    id: state.cookie.id,
    type: state.cookie.type,
  }
}

function mapDispatchToProps(dispatch) {
  return{
    updateCart: (cart_id, total_price, cartList) => dispatch(updateCart(cart_id, total_price, cartList)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
