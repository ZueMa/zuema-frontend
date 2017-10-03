import React, { Component } from 'react'
import axios from 'axios'
import BackButton from '../components/BackButton'
import '../stylesheets/History.css'
import { connect } from 'react-redux'
import ProductTableList from '../components/ProductTableList'

class ItemPurchaseTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            itemList: []
        }
    }

    handlePurchaseItems(e) {
        axios.get('http://localhost:8000/buyers/'+ this.props.id +'/purchases/' + this.props.match.params.id).then((response) => {
        console.log(response.data)
            this.setState({itemList: response.data.items})
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
                    <div className="head">PURCHASE HISTORY : ORDER #{this.props.match.params.id}</div>
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


function mapStateToProps(state) {
    return {
     id: state.cookie.id,
     type: state.cookie.type,
    }
  }
  
export default connect(mapStateToProps)(ItemPurchaseTable);