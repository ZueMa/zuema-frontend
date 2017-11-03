import React,{ Component } from 'react'
import { connect } from 'react-redux'


class CardShipment extends Component {
  render() {
    return (
      <div className="card card-shipment">
        <div className="row">
          <div className="col-md-1">
            <button className="btn num" >1</button>
          </div>
          <div className="col-md-9 shipment-detail">
            <h4 className="card-title">HEllllooo</h4>
            <p>sjdfsjflsfjsli jkfksjdf</p>
          </div>
          <div className="col-md-2">
            <button className="btn confirm-btn">
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

  }
}
export default connect(null, mapDispatchToProps)(CardShipment);