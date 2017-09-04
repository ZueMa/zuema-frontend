import React, { Component } from 'react'
import BackButton from '../components/BackButton'
import '../stylesheets/History.css'
import { purchaseHistoryList } from './PurchaseHistoryBuyer'
import ProductTableList from '../components/ProductTableList'

class ItemPurchaseTable extends Component {

    render() {
        return (
            <div>
                <BackButton url="/purchasehistorybuyer"/>
                <div className="purchase_history_table">
                    <div className="head">PURCHASE HISTORY : ORDER #{purchaseHistoryList[this.props.match.params.id].cart.cart_id}</div>
                    <div className="color_line_head"></div><br />
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th></th>
                                <th className="head_table_title">PRODUCT NAME</th>
                                <th className="head_table_title_center">PRICE</th>
                                <th className="head_table_title_center">QUANTITY</th>
                            </tr>
                        </thead>
                        <tbody>
                            { (purchaseHistoryList[this.props.match.params.id].cart.items).map((item, id) => {
                                return <ProductTableList 
                                        name={item.name}
                                        short_description={item.description}
                                        price={item.price}
                                        image={item.image}
                                        quantity={item.num_purchased}
                                        id={item.id}
                                        key={id}/>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ItemPurchaseTable;