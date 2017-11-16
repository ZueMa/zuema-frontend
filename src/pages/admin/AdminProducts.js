import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import CardAdminProducts from '../../components/CardAdminProducts'
import '../../stylesheets/adminProducts.css'
import axios from 'axios'
import { updateAdminProducts }  from '../../actions/adminProductsAction'

class AdminProducts extends Component {
  callbacks = {}
  handleConnectApi = () => {
    axios.get('http://localhost:8000/admin/purchases/')
    .then((res) => {
      this.props.updateAdminProducts(res.data.purchases)
    })
    .catch((res) => {
      console.error(res)
    })
  }

  componentDidMount(e) {
    this.handleConnectApi();
  }

  updatePage = () => {
    this.forceUpdate()
  }

  render() {
    console.log("comfirm:" + this.props.productList)
    return (
      <div className="container product">
        <div>
          <div className="head">CONFIRM NEW PRODUCTS</div>
          <div className="color_line_head"></div><br />
        </div>
          {this.props.productList.map((itm, id) => {
            return <CardAdminProducts
            purchase_id={itm.purchase_id}
            total_price={itm.total_price}
            buyer_username={itm.buyer_username}
            num={id + 1}
            key={id}
            callbacks={this.callbacks}/>
          })}
      </div> 
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    productList: state.AdminProducts.productList,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    push: (url) => dispatch(push(url)),
    updateAdminProducts: (productList) => dispatch(updateAdminProducts(productList)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminProducts);