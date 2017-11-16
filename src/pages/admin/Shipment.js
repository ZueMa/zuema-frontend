import React, { Component } from 'react'
import '../../stylesheets/shipment.css'
import axios from 'axios'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import CardShipment from '../../components/CardShipment'
import { updateShipment }  from '../../actions/shipmentAction'
import swal from 'sweetalert'

class Shipment extends Component {
  handleConnectApi = () => {
    axios.get('http://localhost:8000/admin/purchases/')
    .then((res) => {
      this.props.updateShipment(res.data.purchases)
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
    console.log("ship:" + this.props.purchaseList)
    return (
      <div className="container shipment">
        <div>
          <div className="head">CONFIRM PRODUCT SHIPMENTS</div>
          <div className="color_line_head"></div><br />
        </div>
        <div>
          {this.props.purchaseList.map((itm, id) => {
            return <CardShipment 
            purchase_id={itm.purchase_id}
            total_price={itm.total_price}
            buyer_username={itm.buyer_username}
            num={id + 1}
            key={itm.purchase_id}/>
          })}
        </div>
      </div> 
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    purchaseList: state.shipment.purchaseList,
    type: state.cookie.type,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    push: (url) => dispatch(push(url)),
    updateShipment: (purchaseList) => dispatch(updateShipment(purchaseList)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shipment);