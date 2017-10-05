import React,{ Component } from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'

class ProductTableList extends Component {
    constructor(props) {
        super(props);
        this.product_id = props.product_id
        this.name = props.name
        this.short_description = props.short_description
        this.quantity = props.quantity
        this.price = props.price
        this.img = props.image
        this.url = "/products/" + this.product_id
    }

    render() {
        return (
            <tr className="order_card" onClick={() => this.props.push(this.url)}>
                <td>
                    <img className="product_img_list" alt="product_img_list" src={this.img}/>
                </td>
                <td className="product_name_shortdes">
                    <p className="product_info">{this.name}</p>
                    <p className="product_shortdes">{this.short_description}</p>
                </td>
                <td className="product_info">{ (this.price * this.quantity).toFixed(2)}</td>
                <td className="product_info">{this.quantity}</td>
            </tr>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return{
      push: (url) => dispatch(push(url))
    }
}

export default connect(null, mapDispatchToProps)(ProductTableList);