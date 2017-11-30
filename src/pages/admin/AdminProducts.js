import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import CardAdminProducts from '../../components/CardAdminProducts'
import '../../stylesheets/adminProducts.css'
import axios from 'axios'
import { updateAdminProducts }  from '../../actions/adminProductsAction'
import swal from 'sweetalert'

class AdminProducts extends Component {

  handleConnectApi = () => {
    axios.get('http://localhost:8000/admin/products/')
    .then((res) => {
      this.props.updateAdminProducts(res.data.products)
    })
    .catch((res) => {
      console.error(res)
    })
  }

  componentWillMount(e) {
    if(this.props.type !== 'admin') {
      swal({
        title: "ADMIN ONLY!",
        icon: "error",
      })
      .then(() => {
        this.props.push('/admin')
      });
    } else {
      this.handleConnectApi();
    }
  }


  render() {
    return (
      <div className="container admin-product">
        <div>
          <div className="head">CONFIRM NEW PRODUCTS</div>
          <div className="color_line_head"></div><br />
        </div>
          {this.props.products.map((itm, id) => {
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
  return {
    products: state.adminProducts.products,
    type: state.cookie.type,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    push: (url) => dispatch(push(url)),
    updateAdminProducts: (products) => dispatch(updateAdminProducts(products)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AdminProducts);