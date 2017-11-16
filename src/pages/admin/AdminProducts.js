import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import CardAdminProducts from '../../components/CardAdminProducts'
import '../../stylesheets/adminProducts.css'
import axios from 'axios'
import { updateAdminProducts }  from '../../actions/adminProductsAction'

class AdminProducts extends Component {

  constructor(props){
    super(props);
    this.state = { products:[] };
  }
  handleConnectApi = () => {
    axios.get('http://zuema.apiblueprint.org/admin/products')
    .then((res) => {
      this.props.updateAdminProducts(res.data.products)
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
          {this.productList.map((itm, id) => {
            return <CardAdminProducts
            product_id={itm.product_id}
            name={itm.name}
            short_description={itm.short_description}
            price={itm.price}
            num={id + 1}
            key={itm.product_id}
            />
          })}
      </div> 
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    puroductList: state.adminProducts.productList,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    push: (url) => dispatch(push(url)),
    updateAdminProducts: (productList) => dispatch(updateAdminProducts(productList)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AdminProducts);