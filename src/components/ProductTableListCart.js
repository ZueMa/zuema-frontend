import React,{ Component } from 'react'
import { connect } from 'react-redux'
import logo from '../res/logo.png'
import axios from 'axios'
import { updateCart } from '../actions/cartAction'
import '../stylesheets/cart.css'

class ProductTableListCart extends Component {
    handleConnectApi = () => {
        axios.get('http://localhost:8000/buyers/' + this.props.id + '/cart/')
        .then((res) => {
          console.log(res.data)
          this.props.updateCart(res.data.cart_id, res.data.total_price, res.data.items)
        })
        .catch((res) => {
          console.error(res)
        })
    }

    deleteProductCart(id) {
        axios.delete('http://localhost:8000/buyers/' + this.props.id + '/cart/items/' + id + '/')
        .then((response) => {
          console.log(response.data)
          this.handleConnectApi();
        })
        .catch((response) => {
          console.log(response)
        })
    }

    updateProductQuantity(status, id) {
        console.log('id: ' + id)
        axios.post('http://localhost:8000/buyers/' + this.props.id + '/cart/items/' + id + '/', {
            action: status
        })
        .then((response) => {
            console.log(response.data)
            this.handleConnectApi();
        })
        .catch((response) => {
            console.log(response)
        })
    }

    render() {
        return (
            <tr className="order_card">
                <td>
                    <image className="product_img_list" src={logo} alt="product image"/>
                </td>
                <td className="product_name_shortdes">
                    <p className="product_info">{this.props.name}</p>
                    <p className="product_shortdes">{this.props.short_description}</p>
                </td>
                <td className="product_info">{Number(this.props.price).toFixed(2)}</td>
                <td className="product_info">
                    <p>{this.props.quantity}</p>
                    <button className="btn quantity-product-btn" onClick={(e) => {this.updateProductQuantity('increase', this.props.product_id)}}><i className="cal-btn">+</i></button>
                    <button className="btn quantity-product-btn" onClick={(e) => {this.updateProductQuantity('decrease', this.props.product_id)}}><i className="cal-btn">-</i></button>
                </td>
                <td className="product_info">
                    <button id={this.props.product_id} className="trash-btn" onClick={(e) => {this.deleteProductCart(this.props.product_id)}}><i className="fa fa-trash fa-2x" /></button>
                </td>
            </tr>
        )
    }
}
  
function mapDispatchToProps(dispatch) {
    return{
      updateCart: (cart_id, total_price, cartList) => dispatch(updateCart(cart_id, total_price, cartList)),
    }
}

function mapStateToProps(state) {
    return {
      id: state.cookie.id,
      type: state.cookie.type,
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ProductTableListCart);
