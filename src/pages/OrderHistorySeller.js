import React, { Component } from 'react'
import axios from 'axios'
import OrderHistoryCard from '../components/OrderHistoryCard'
import BackButton from '../components/BackButton'
import { connect } from 'react-redux'
import '../stylesheets/History.css'

class OrderHistorySeller extends Component {

    constructor(props) {
        super(props)
        this.state = {
            orders: []
        }
    }

    handleOrderHis(e) {
        axios.get('http://localhost:8000/sellers/'+ this.props.id +'/orders/').then((response) => {
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
                                <th className="head_table_title_center">REVENUE</th>
                                <th className="head_table_title_center">QUANTITY</th>
                                <th className="head_table_title_center">DATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.state.orders.map((item, id) => {
                                return <OrderHistoryCard 
                                            name={item.name}
                                            short_description={item.short_description}
                                            product_id={item.product_id}
                                            revenue={item.revenue}
                                            quantity={item.num_items}
                                            date={item.timestamp}
                                            img={item.image}
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
  
export default connect(mapStateToProps)(OrderHistorySeller);
