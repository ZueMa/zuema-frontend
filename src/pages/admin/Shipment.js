import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import CardShipment from '../../components/CardShipment'
import '../../stylesheets/shipment.css'

class Shipment extends Component {

  render() {
    return (
      <div className="container shipment">
        <div>
          <div className="head">CONFIRM PRODUCT SHIPMENTS</div>
          <div className="color_line_head"></div><br />
        </div>
        <CardShipment/>
        <CardShipment/>
      </div> 
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    push: (url) => dispatch(push(url)),
  }
}

export default connect(null, mapDispatchToProps)(Shipment);