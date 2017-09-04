import React, { Component } from 'react'
import axios from 'axios'
import OrderHistoryCard from '../components/OrderHistoryCard'
import BackButton from '../components/BackButton'
import '../stylesheets/History.css'

class OrderHistorySeller extends Component {

    constructor(props) {
        super(props)
        this.state = {
            orders: []
        }
    }

    handleOrderHis(e) {
        console.log(e)
        axios.get('https://private-00f7e-zuema.apiary-mock.com/sellers/me/orders').then((response) => {
            console.log(response)
            this.setState({orders: response.data.orders})
        }).catch((response) => {
            console.error(response)
        })
    }

    componentDidMount(e) {
        this.handleOrderHis(e)
    }

    render(){
        return (
            <div>
                <BackButton />
                <div className="seller_history_table">
                    <div className="head">ORDER HISTORY</div>
                    <div className="color_line_head"></div><br />
                    <table className="table table-responsive table-hover">
                        <thead>
                            <tr>
                                <th></th>
                                <th className="head_table_title">PRODUCT NAME</th>
                                <th className="head_table_title_center">PRICE</th>
                                <th className="head_table_title_center">QUANTITY</th>
                                <th className="head_table_title_center">DATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.state.orders.map((item, id) => {
                                return <OrderHistoryCard 
                                            name={item.product.name}
                                            short_description={item.product.short_description}
                                            id={item.product.product_id}
                                            price={item.revenue}
                                            quantity={item.num_items}
                                            date={item.timestamp}
                                            img={item.product.image}
                                            key={id}/>
                            })}
                        </tbody>
                    </table>
                    
                </div>
            </div>
        )
    }
}

export default OrderHistorySeller;
