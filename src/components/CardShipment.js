import React,{ Component } from 'react'
import { connect } from 'react-redux'


class CardShipment extends Component {

  constructor(props) {
    super(props);
    this.id = props.id
    this.purchase_id = props.purchase_id
    this.buyer_name = props.buyer_name
    this.total_price = props.total_price
    // this.url = "/itempurchasetable/" + this.purchase_id
    this.url = "/"
  }

  render() {
    return (
      <div className="card card-shipment" onClick={() => this.props.push(this.url)}>
        <div className="row">
          <div className="col-md-1">
            <button className="btn num" >{this.id}</button>
          </div>
          <div className="col-md-9 shipment-detail">
            <h4 className="card-title">PURCHASE #{this.purchase_id} - {this.total_price} Baht</h4>
            <p>Buyer: {this.buyer_name}</p>
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