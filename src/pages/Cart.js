import React, { Component } from 'react'
import '../stylesheets/cart.css'
import axios from 'axios'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { updateCart } from '../actions/cartAction'
import ProductTableListCart from '../components/ProductTableListCart'
import swal from 'sweetalert'

class Cart extends Component {
  
  handleConnectApi = () => {
    axios.get('http://localhost:8000/buyers/' + this.props.id + '/cart/')
    .then((res) => {
      this.props.updateCart(res.data.cart_id, res.data.total_price, res.data.items)
    })
    .catch((res) => {
      console.error(res)
    })
  }

  componentWillMount(e) {
    if (this.props.id === '') {
      swal({
        title: "Please Login First!",
        icon: "error",
      })
      .then(() => {
        this.props.push('/login')
      });
    } else {
      this.handleConnectApi();
    }
  }

  checkoutCart(e) {
    axios.post('http://localhost:8000/buyers/' + this.props.id + '/cart/purchase/')
    .then((res) => {
      console.log(res)
      swal({
        title: "Your Cart Has Been Purchased!",
        icon: "success",
      })
      .then(() => {
        this.props.push('/purchasehistorybuyer')
      });
    })
    .catch((res) => {
      console.log(res)
    })
  }

  render() {
    if (this.props.id !== '') {
      return(
        <div className="container cart">
          <div className="head-cart-page row">
            <div className="col-md-6">
              <div className="head">YOUR SHOPPING CART</div>
              <div className="color_line_head"></div><br />
            </div>
            <div className="col-md-6">
              <button className="btn checkout-cart-btn" onClick={(e) => {this.checkoutCart(e)}}>CHECKOUT</button>
            </div>
          </div>
          
          <table className="table table-hover">
            <thead>
              <tr>
                <th></th>
                <th className="head_table_title">PRODUCT NAME</th>
                <th className="head_table_title_center">PRICE</th>
                <th className="head_table_title_center">QUANTITY</th>
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
                <td>TOTAL PRICE</td>
                <td>{Number(this.props.total_price).toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      )
    }
    return null;
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
    push: (url) => dispatch(push(url)),
    updateCart: (cart_id, total_price, cartList) => dispatch(updateCart(cart_id, total_price, cartList)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
