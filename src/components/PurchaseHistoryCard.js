import React,{ Component } from 'react'

class PurchaseHistoryCard extends Component {

    constructor(props) {
        super(props);
        this.cart_id = props.cart_id
        this.total_items = props.total_items
        this.total_price = props.total_price
        this.status = props.status
        this.item_list = props.item_list
    }

    get checkStatus(){
        if(this.status)
            return 'RECEIVED'
        else
            return 'DELIVERING'
    }

    render() {
        return (
            <tr className="order_card">
                <td className="product_name_shortdes">
                    <p className="product_info">ORDER #{this.cart_id}</p>
                </td>
                <td className="product_info">{this.total_price}</td>
                <td className="product_info">{this.total_items}</td>
                <td className="product_info">
                    <div className="status_point">
                        <p>◉  &nbsp;{this.checkStatus}</p>
                    </div>
                </td>
            </tr>
        )
    }
}

export default PurchaseHistoryCard;