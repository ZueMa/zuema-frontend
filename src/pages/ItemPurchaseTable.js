import React, { Component } from 'react'
import axios from 'axios'
import BackButton from '../components/BackButton'
import '../stylesheets/History.css'
import ProductTableList from '../components/ProductTableList'

class ItemPurchaseTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            purchase_id: '',
            itemList: []
        }
    }

    handlePurchaseItems(e) {
        axios.get('http://localhost:8000/buyers/1/purchases/purchase_id').then((response) => {
        console.log(response.data)
            this.setState({itemList: response.data.items, purchase_id: response.data.purchase_id})
        }).catch((response) => {
            console.error(response)
        })
    }

    componentDidMount(e) {
        this.handlePurchaseItems(e)
    }

    render() {
        return (
            <div>
                <BackButton url="/purchasehistorybuyer"/>
                <div className="purchase_history_table">
                    <div className="head">PURCHASE HISTORY : ORDER #{this.state.purchase_id}</div>
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
                            { this.state.itemList.map((item, id) => {
                                return <ProductTableList 
                                        name={item.name}
                                        short_description={item.short_description}
                                        price={item.price}
                                        image={item.image}
                                        quantity={item.num_items}
                                        product_id={item.product_id}
                                        id={id}
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