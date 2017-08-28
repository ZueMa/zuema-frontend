import React, { Component } from 'react'
import '../stylesheets/cart.css'
import { Link } from 'react-router-dom'

class Cart extends Component {
  render() {
    return(
      <div className="container cart">
        <div className="container head-cart-page">
          <span className="page-title">YOUR SHOPPING CART</span>
          <button className="btn checkout-cart-btn">CHECKOUT</button>
          <button className="btn edit-cart-btn">EDIT<Link to={'/cart/edit'}></Link>
          </button>
        </div>
        
        <table className="table-cart">
          <thead>
            <th></th>
            <th>PRODUCT NAME</th>
            <th className="topic-center">PRICE</th>
            <th className="topic-center">QUANTITY</th>
          </thead>

          <tbody>
            <tr>
              <td>
                <img className="cart-product-img"></img>
              </td>
              <td className="cart-product-list">
                <span className="order-name">PRODUCT NAME</span><br/>
                <p className="order-description">Short description</p>
              </td>
              <td>130.00</td>
              <td>1</td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td>TOTAL</td>
              <td>1000.00</td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  }
}

export default Cart;