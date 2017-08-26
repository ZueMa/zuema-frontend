import React, { Component } from 'react'
import PurchaseHistoryCard from '../components/PurchaseHistoryCard'
import '../stylesheets/History.css'

export const purchaseHistoryList = [
    {
        id: 1,
        cart: {
            cart_id: 1,
            total_items: 3,
            total_price: 2500.0,
            items: [
                {
                    id: 1,
                    seller_id: 1,
                    name: "Coke",
                    category: "Leisure",
                    description: "Good for relaxation!",
                    price: 1000.0,
                    image: "EX4IJTRkb7lobNUStXsB0jIXIAMSsQnWlsV+wULF4Avk9fLq2r",
                    num_purchased: 2
                },
                {
                    id: 2,
                    seller_id: 1,
                    name: "Cloth",
                    category: "Clothing",
                    description: "So soft!",
                    price: 500.0,
                    image: "2r8a5HSE35Q3eO2XP1A1wQkZSgETvDtKdQAAAABJRU5ErkJggg",
                    num_purchased: 1
                }
            ]
        },
        timestamp: "25/04/17, 09:12:52",
        is_shipped: true
    },
    {
        id: 2,
        cart: {
            cart_id: 2,
            total_items: 1,
            total_price: 3500.0,
            items: [
                {
                    id: 4,
                    seller_id: 2,
                    name: "Gaming Keyboard",
                    category: "Computer",
                    description: "So mechanical!",
                    price: 3500.0,
                    image: "iVBORw0KGgoAAAANSUhEUgAAABwAAAASCAMAAABEQVR4XwULFy",
                    num_purchased: 1
                }
            ]
        },
        timestamp: "31/07/17, 21:15:03",
        is_shipped: false
    }
]

class PurchaseHistoryBuyer extends Component{
    render() {
        return (
            <div className="purchase_history_table">
                <div className="head">PURCHASE HISTORY</div>
                <div className="color_line_head"></div><br />
                <table className="table">
                    <thead>
                        <tr>
                            <th className="head_table_title">ORDER</th>
                            <th className="head_table_title_center">PRICE</th>
                            <th className="head_table_title_center">QUANTITY</th>
                            <th className="head_table_title_center">STATUS</th>
                        </tr>
                    </thead>
                    <tbody>
                        { purchaseHistoryList.map((items, id) => {
                            return <PurchaseHistoryCard 
                                        total_items={items.cart.total_items}
                                        total_price={items.cart.total_price}
                                        item_list={items.cart.item}
                                        cart_id={items.cart.cart_id}
                                        key={id}
                                        status={items.is_shipped}/>
                        })}

                    </tbody>
                </table>

            </div>
        )
    }
}

export default PurchaseHistoryBuyer;