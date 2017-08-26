import React, { Component } from 'react'
import '../stylesheets/cart.css'

class Cart extends Component {
  render() {
    return(
      <div className="container cart">
        <div className="container head-cart-page">
          <span className="page-title">YOUR SHOPPING CART</span>
          <button className="checkout-cart-btn">CHECKOUT</button>
          <button className="edit-cart-btn">EDIT</button>
        </div>
        
        <table className="table-cart">
          <thead>
            <th>PRODUCT NAME</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
          </thead>

          <tbody>
            <tr>
              <td className="cart-product-list">
                <img className="cart-product-img"></img>
                <div className="cart-product-detail">
                  <span className="order-name">PRODUCT NAME</span><br/>
                  <p className="order-description">Short description</p>
                </div>
              </td>
              <td>130.00</td>
              <td>1</td>
            </tr>
          </tbody>

          <tfoot>
            <tr>
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