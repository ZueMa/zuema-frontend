import React,{ Component } from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import '../stylesheets/History.css'

class PurchaseHistoryCard extends Component {

    constructor(props) {
        super(props);
        this.purchase_id = props.purchase_id
        this.cart_id = props.cart_id
        this.total_items = props.total_items
        this.total_price = props.total_price
        this.status = props.status
        this.item_list = props.item_list
        this.date = props.date
        this.url = "/itempurchasetable/" + this.purchase_id
    }

    get checkStatus(){
        if(this.status)
            return 'RECEIVED'
        else
            return 'DELIVERING'
    }

    render() {
        return (
            <tr className="order_card" onClick={() => this.props.push(this.url)}>
                <td className="product_name_shortdes">
                    <p className="product_info">PURCHASE #{this.purchase_id}</p>
                </td>
                <td className="product_info w3-animate-top">{Number(this.total_price).toFixed(2)}</td>
                <td className="product_info">{this.total_items}</td>
                <td className="product_info">{this.date}</td>
                <td className="product_info">
                    <div className="status_point">
                        <p>◉  &nbsp;{this.checkStatus}</p>
                    </div>
                </td>
            </tr>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return{
      push: (url) => dispatch(push(url))
    }
}

export default connect(null, mapDispatchToProps)(PurchaseHistoryCard);