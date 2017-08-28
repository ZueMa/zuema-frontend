import React from 'react'
import { Link } from 'react-router-dom'

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
      this.name = props.name
      this.detail = props.detail
      this.id = props.id
      this.price = props.price
  }

  render() {
    return (
      <div style={{margin: '15px', display: 'inline-block'}}>
        <div className="ProductCard">
          <Link to={`/products/${this.id}`} className="ProductImg">
          </Link>
          <div className="ProductInfo">
            <div>
              <div className="ProductName">{this.name}</div>
              <div className="ProductDetail">{this.detail}</div> 
            </div>
            <div className="ProductPrice" style={{display: "flex"}}>
              <div>
                {this.price}
              </div>
              <div style={{textAlign: 'right'}}>
                <i className="fa fa-cart-plus fa-lg" style={{cursor: 'pointer'}} onClick={() => console.log("item added")}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductCard;
