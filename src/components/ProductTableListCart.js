import React,{ Component } from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'

class ProductTableListCart extends Component {
    constructor(props) {
        super(props);
        this.name = props.name
        this.short_description = props.short_description
        this.id = props.id
        this.quantity = props.quantity
        this.price = props.price
        this.img = props.image
        this.url = "/products/" + this.id

        this.page = props.page
    }

    render() {
        let quantity = null;
        let tash = null;
        if(this.page === "editCart") {  
            quantity = <td className="product_info"><input type="number" min="1" max="10" value={this.quantity} class="form-control" id="input_quitity"></input></td>;
            tash = <td className="product_info"><button className="trash-btn"><i className="fa fa-trash fa-4x" /></button></td>;
        }else {
            quantity = <td className="product_info">{this.quantity}</td>
        }
        return (
            <tr className="order_card">
                <td>
                    <img className="product_img_list" src="./src/res/logo.png" class="img-thumbnail"/>
                </td>
                <td className="product_name_shortdes">
                    <p className="product_info">{this.name}</p>
                    <p className="product_shortdes">{this.short_description}</p>
                </td>
                <td className="product_info">{this.price}</td>
                {quantity}
                {tash}
            </tr>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return{
      push: (url) => dispatch(push(url))
    }
}

export default connect(null, mapDispatchToProps)(ProductTableListCart);
