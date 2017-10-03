import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import '../stylesheets/addproduct.css'

class EditProduct extends Component {
  constructor(props) {
    
    super(props)
    this.product = props.product    
    this.state = {
      name: this.product.name,
      short_description: this.product.short_description,
      full_description: this.product.full_description,
      price: this.product.price,
      category: this.product.category,
      num_stocks: this.product.num_stocks,
      image: '',

    }
    
  }

  // componentDidMount(){
  //   axios.get('http://localhost:8000/products/2/').then( res => {
  //     this.setState({
  //       name: res.data.name,
  //       short_description: res.data.short_description,
  //       full_description: res.data.full_description,
  //       price: res.data.price,
  //       category: res.data.category,
  //       num_stocks: res.data.num_stocks,
  //       image: res.data.image,
  //     });
  //   })
  // }

  updateProduct(e) {
    console.log(this.props.product.product_id);
    // console.log(e)
    // if (this.state.image === ""){
    //   this.setState({image: this.state.image.replace("localhost:8000", "")})
    // }
    axios.put('http://localhost:8000/sellers/'+this.props.id+'/products/'+this.props.product.product_id+'/', {
      name: this.state.name,
      category: this.state.category,  
      price: this.state.price,     
      num_stocks: this.state.num_stocks,      
      short_description: this.state.short_description,
      full_description: this.state.full_description,
      image: this.state.image
    })
    .then((response) => {
      console.log(response)    
    })
    .catch((response) => {
      console.error(response) 
    })
  }

  render() {
    return(
      <div className="container-box">
        <div className="text-head">EDIT YOUR PRODUCT
          <div className="line-rectangle"></div>
          <p id="type">SELLER</p>
        </div>

        <div className="input-form">
            <div className="left-col">
              <p className="label">PRODUCT NAME*</p>
              <input className="input-text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
              <br/>
              <p className="label">SHORT DESCRIPTION*</p>
              <input className="input-text" value={this.state.short_description} onChange={(e) => this.setState({short_description: e.target.value})}/>
              <br/>
              <p className="label">FULL DESCRIPTION*</p>
              <textarea  className="input-box" value={this.state.full_description} cols="51" rows="6" onChange={(e) => this.setState({full_description: e.target.value})}/>
            </div>

            <div className="right-col">
              <p className="label">CHOOSE CATEGORY*</p>
              <select className="select-category" value={this.state.category} onChange={(e) => this.setState({category: e.target.value})}>
                <option value="" disabled hidden>CHOOSE CATEGORY</option>
                <option value="Clothes">CLOTHES</option>
                <option value="Electronics">ELECTRONICS</option>
                <option value="Kids">KIDS</option>
                <option value="Sports">SPORT</option>
                <option value="Cosmetics">COSMETICS</option>
                <option value="Home & Garden">HOME & GARDEN</option>
            </select>
              <p className="label">PRODUCT PRICE*</p>
              <input className="input-num" value={this.state.price} type="number" size="5" onChange={(e) => this.setState({price: e.target.value})}/>
              <p className="label">PRODUCT QTY*</p>
              <input className="input-num" value={this.state.num_stocks} type="number" size="5" onChange={(e) => this.setState({num_stocks: e.target.value})}/>
              <p className="label">PRODUCT IMAGE*</p>
              <input  className="input-text" type="file" onChange={(e) => this.setState({image: e.target.value.replace("C:\\fakepath\\", "")})}/>
            <div>
            <br/>
              <button className="submit-button" onClick={(e) => this.updateProduct(e)}>SAVE</button>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    product: state.product.data,
    id: state.cookie.id,
  }
}

export default connect(mapStateToProps)(EditProduct);
