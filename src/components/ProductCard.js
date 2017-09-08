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
      <Link to={`/products/${this.id}`} style={{display: "inline-block"}}>
        <div className="ProductCard">
          <div className="ProductImg">
          </div>
          <div className="ProductInfo">
              <div className="ProductName">{this.name}</div>
              <div className="ProductDetail">{this.detail}</div> 
              <div className="ProductPrice">{this.price}</div>
          </div>
          
        </div>
      </Link>
    )
  }
}

export default ProductCard;
