import React, { Component } from 'react'
import axios from 'axios'
import '../stylesheets/addproduct.css'
import { connect } from 'react-redux'
import swal from 'sweetalert'


class AddProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      short_description: '',
      full_description: '',
      price: '',
      category: '',
      num_stocks: '',
      image: '',
      id:'',
    }
  }

  addProduct(e) {
    console.log(this.state)
    axios.post('http://localhost:8000/sellers/'+this.props.id+'/products/', {
      name: this.state.name,
      category: this.state.category,  
      price: this.state.price,     
      num_stocks: this.state.num_stocks,      
      short_description: this.state.short_description,
      full_description: this.state.full_description,
      image: this.state.image
    })
    .then((response) => {
      swal({
        title: "Product Added!",
        icon: "success",
        confirmButtonText: "Go to home"
      }) 
    })
    .catch((response) => {
      swal({
        title: "Please fill in all information!",
        icon: "error",
      }); 
    })
  }

  render() {
    return(
      <div className="container-box">
        <div className="text-head">ADD YOUR PRODUCT
          <div className="line-rectangle"></div>
          <p id="type">SELLER</p>
        </div>

        <div className="input-form">
      
            <div className="left-col">
              <p className="label">PRODUCT NAME*</p>
              <input className="input-text" onChange={(e) => this.setState({name: e.target.value})}/>
              <br/>
              <p className="label">SHORT DESCRIPTION*</p>
              <input className="input-text" onChange={(e) => this.setState({short_description: e.target.value})}/>
              <br/>
              <p className="label">FULL DESCRIPTION*</p>
              <textarea className="input-box" id="input-text" cols="51" rows="6" onChange={(e) => this.setState({full_description: e.target.value})}/>
            </div>

            <div className="right-col">
              <p className="label">CHOOSE CATEGORY*</p>
              <select defaultValue="" className="select-category" onChange={(e) => this.setState({category: e.target.value})}>
                <option value="" disabled hidden>CHOOSE CATEGORY</option>
                <option value="Cosmetics">Cosmetics</option>
                <option value="Clothes">Clothes</option>
                <option value="Electronics">Electronics</option>
                <option value="Kids">Kids</option>
                <option value="Sports">Sports</option>
                <option value="Home & Garden">Home & Garden</option>
              </select>
              <p className="label">PRODUCT PRICE*</p>
              <input className="input-num" type="number" size="5" onChange={(e) => this.setState({price: e.target.value})}/>
              <p className="label">PRODUCT QTY*</p>
              <input className="input-num" type="number" size="5" onChange={(e) => this.setState({num_stocks: e.target.value})}/>
              <p className="label">PRODUCT IMAGE*</p>
                <input type="file" className="input-text" onChange={(e) => this.setState({image: e.target.value.replace("C:\\fakepath\\", "")})}/>
              <div>
              <br/>
              <button className="submit-button"onClick={(e) => this.addProduct(e)}>ADD PRODUCT</button>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
   id: state.cookie.id,
  }
}

export default connect(mapStateToProps)(AddProduct);
