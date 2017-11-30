import React,{ Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import swal from 'sweetalert'
import { updateShipment }  from '../actions/shipmentAction'


class CardShipment extends Component {

  constructor(props) {
    super(props);
    this.num = props.num
    this.purchase_id = props.purchase_id
    this.buyer_username = props.buyer_username
    this.total_price = props.total_price
    this.url = "/"
  }

  handleConnectApi = () => {
    axios.get('http://localhost:8000/admin/purchases/')
    .then((res) => {
      this.props.updateShipment(res.data.purchases)
    })
    .catch((res) => {
      console.error(res)
    })
  }

  confirmShipment(purchase_id) {
    axios.patch('http://localhost:8000/admin/purchases/' + purchase_id + '/')
    .then((res) => {
      swal({
        title: "Shipment Confirmed!",
        icon: "success",
      });
      this.handleConnectApi();
    })
    .catch((res) => {
      console.error(res)
    })
  }

  render() {
    return (
      <div className="card card-shipment" >
        <div className="row">
          <div className="col-md-1">
            <button className="btn num" >{this.num}</button>
          </div>
          <div className="col-md-9 shipment-detail">
            <h4 className="card-title">PURCHASE #{this.purchase_id} - {Number(this.total_price).toFixed(2)} Baht</h4>
            <p>Buyer: {this.buyer_username}</p>
          </div>
          <div className="col-md-2">
            <button className="btn confirm-btn" onClick={(e) => {this.confirmShipment(this.props.purchase_id)}}>
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
    updateShipment: (purchaseList) => dispatch(updateShipment(purchaseList)),
  }
}

function mapStateToProps(state) {
  return {
    id: state.cookie.id,
    type: state.cookie.type,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CardShipment);