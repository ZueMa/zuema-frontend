import React,{ Component } from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'

class ProductTableList extends Component {
    constructor(props) {
        super(props);
        this.name = props.name
        this.short_description = props.short_description
        this.id = props.id
        this.quantity = props.quantity
        this.price = props.price
        this.img = props.image
        this.url = "/products/" + this.id
    }

    render() {
        return (
            <tr className="order_card" onClick={() => this.props.push(this.url)}>
                <td>
                    <img className="product_img_list" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15e1d79aff0%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15e1d79aff0%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.09375%22%20y%3D%22104.6546875%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" class="img-thumbnail"/>
                </td>
                <td className="product_name_shortdes">
                    <p className="product_info">{this.name}</p>
                    <p className="product_shortdes">{this.short_description}</p>
                </td>
                <td className="product_info">{this.price}</td>
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
