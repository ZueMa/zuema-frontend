import React, { Component } from 'react'
import axios from 'axios'
import PurchaseHistoryCard from '../components/PurchaseHistoryCard'
import BackButton from '../components/BackButton'
import { connect } from 'react-redux'
import '../stylesheets/History.css'

class PurchaseHistoryBuyer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            purchaseList: []
        }
    }

    handlePurchaseList(e) {
        axios.get('http://localhost:8000/buyers/'+ this.props.id +'/purchases/').then((response) => {
            this.setState({purchaseList: response.data.purchases})
        }).catch((response) => {
            console.error(response)
        })
    }

    componentDidMount(e) {
        this.handlePurchaseList(e)
    }

    render() {
        return (
            <div>
                <BackButton />
                <div className="purchase_history_table">
                    <div className="head">PURCHASE HISTORY</div>
                    <div className="color_line_head"></div><br />
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th className="head_table_title">PURCHASE</th>
                                <th className="head_table_title_center">PRICE</th>
                                <th className="head_table_title_center">QUANTITY</th>
                                <th className="head_table_title_center">DATE</th>
                                <th className="head_table_title_center">STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.state.purchaseList.map((items, id) => {
                                return <PurchaseHistoryCard 
                                            total_items={items.total_items}
                                            total_price={items.total_price}
                                            purchase_id={items.purchase_id}
                                            cart_id={items.cart_id}
                                            date={items.timestamp}
                                            id={id}
                                            key={id}
                                            status={items.is_shipped}/>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
     id: state.cookie.id,
     type: state.cookie.type,
    }
  }
  
export default connect(mapStateToProps)(PurchaseHistoryBuyer);