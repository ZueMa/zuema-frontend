import React,{ Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { updateProduct }  from '../actions/productAction';

class CardProduct extends Component {

  constructor(props) {
    super(props);
    this.num = props.num
    this.productName = props.productName
    this.shortDescription = props.shortDescription
    this.url = "/"
    console.log(this.props)
  }

  handleConnectApi = () => {
    axios.get('http://localhost:8000/admin/product/')
    .then((res) => {
      this.props.updateProduct(res.data.product)
    })
    .catch((res) => {
      console.error(res)
    })
  }

  confirmProduct(purchase_id) {
    axios.patch('http://localhost:8000/admin/sellers/' + this.seller + '/')
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
          <div className="col-md-9 product-detail">
            <h4 className="card-title">{this.productName}</h4>
            <p>{this.shortDescription}</p>
          </div>
          <div className="col-md-2">
            <button className="btn confirm-btn" onClick={(e) => {this.confirmProduct(this.props.seller)}}>
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
    updateProduct: (productList) => dispatch(updateProduct(productList)),
  }
}

function mapStateToProps(state) {
  return {
    id: state.cookie.id,
    type: state.cookie.type,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CardProduct);