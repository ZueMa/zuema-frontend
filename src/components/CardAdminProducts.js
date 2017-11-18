import React,{ Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { updateAdminProducts }  from '../actions/adminProductsAction';

class CardAdminProducts extends Component {

  constructor(props) {
    super(props);
    this.num = props.num
    this.name = props.name
    this.product_id = props.product_id    
    this.price = props.price
    this.short_description = props.short_description
    this.url = "/"

  }

  handleConnectApi = () => {
    axios.get('http://localhost:8000/admin/products/')
    .then((res) => {
      this.props.updateAdminProducts(res.data.products)
    })
    .catch((res) => {
      console.error(res)
    })
  }

  confirmProduct(product_id) {
    axios.patch('http://localhost:8000/admin/products/' + this.props.product_id+'/')
    .then((res) => {
      console.log(res)
      this.handleConnectApi();
    })
    .catch((res) => {
      console.error(res)
    })
  }

  render() {
    return (
      <div className="card card-product" >
        <div className="row">
          <div className="col-md-1">
            <button className="btn num" >{this.num}</button>
          </div>
          <div className="col-md-7 product-detail">
            <h4 className="card-title">{this.name}</h4>
            <p>{this.short_description}</p>
          </div>
          <div className="col-md-2">
            <button className="btn num" >{Number(this.price).toFixed(2)} Baht</button>
          </div>
          <div className="col-md-2">
            <button className="btn confirm-btn" onClick={(e) => {this.confirmProduct(this.props.product_id)}}>
              <i className="fa fa-check fa-2x"/><br/>
              CONFIRM
            </button>
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateAdminProducts: (products) => dispatch(updateAdminProducts(products)),
  }
}

function mapStateToProps(state) {
  return {
    id: state.cookie.id,
    type: state.cookie.type,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CardAdminProducts);