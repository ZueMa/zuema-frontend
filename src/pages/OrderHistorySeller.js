import React, { Component } from 'react'
import OrderHistoryCard from '../components/OrderHistoryCard'
import '../stylesheets/History.css'

export const orderHistoryList = [
    {
        id: 1,
        product: {
            product_id: 1,
            name: "Coke",
            category: "Leisure",
            short_description: "Good for relaxation!",
            price: 1000.0,
            image: "EX4IJTRkb7lobNUStXsB0jIXIAMSsQnWlsV+wULF4Avk9fLq2r"
        },
        num_items: 2,
        revenue: 2000.0,
        timestamp: "25/04/17, 09:12:52"
    },
    {
        id: 2,
        product: {
            product_id: 2,
            name: "Cloth",
            category: "Clothing",
            short_description: "So soft!",
            price: 500.0,
            image: "2r8a5HSE35Q3eO2XP1A1wQkZSgETvDtKdQAAAABJRU5ErkJggg"
        },
        num_items: 1,
        revenue: 500.0,
        timestamp: "25/04/17, 09:12:52"
    }
]

class OrderHistorySeller extends Component {
    render(){
        return (
            <div className="seller_history_table">
                <div className="head">ORDER HISTORY</div>
                <div className="color_line_head"></div><br />
                <table className="table">
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
                        { orderHistoryList.map((item, id) => {
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
        )
    }
}

export default OrderHistorySeller;
