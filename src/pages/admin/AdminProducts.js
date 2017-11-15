import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import CardAdminProduct from '../../components/CardAdminProduct'
import '../../stylesheets/admin-product.css'
import axios from 'axios'
import { updateProduct }  from '../../actions/productAction'

class AdminProduct extends Component {
  callbacks = {}
  handleConnectApi = () => {
    axios.get('http://localhost:8000/admin/purchases/')
    .then((res) => {
      this.props.updateProduct(res.data.purchases)
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
    console.log("product:" + this.props.productList)
    return (
      <div className="container product">
        <div>
          <div className="head">CONFIRM NEW PRODUCTS</div>
          <div className="color_line_head"></div><br />
        </div>
          {this.props.productList.map((itm, id) => {
            return <CardAdminProduct 
            product={itm.product}
            shortDescription={itm.shortDescription}
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
    productList: state.product.productList,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    push: (url) => dispatch(push(url)),
    updateProduct: (productList) => dispatch(updateProduct(productList)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminProducts);