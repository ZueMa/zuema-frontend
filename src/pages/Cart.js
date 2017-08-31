import React, { Component } from 'react'
import '../stylesheets/cart.css'
import { Link } from 'react-router-dom'
import ProductTableListCart from '../components/ProductTableListCart'

class Cart extends Component {
  render() {
    return(
      <div className="container cart">
        <div className="head-cart-page row">
          <div className="col-md-6">
            <div className="head">YOUR SHOPPING CART</div>
            <div className="color_line_head"></div><br />
          </div>
          <div className="col-md-6">
            <button className="btn checkout-cart-btn">CHECKOUT</button>
            <Link to={'/cartedit'}><button className="btn edit-cart-btn">EDIT</button></Link>
          </div>
        </div>
        
        <table className="table table-hover">
          <thead>
            <tr>
              <th></th>
              <th className="head_table_title">PRODUCT NAME</th>
              <th className="head_table_title_center">PRICE</th>
              <th className="head_table_title_center">QUILITY</th>
            </tr>
          </thead>

          <tbody>
            <ProductTableListCart 
            name="PRODUCT NAME" 
            short_descrition="Short description"
            price="100"
            image="logo.png"
            quantity="1"/>
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