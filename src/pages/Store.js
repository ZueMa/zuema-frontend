import React, { Component } from 'react'
import ProductCard from '../components/ProductCard'
import '../stylesheets/store.css'
import Categories from '../components/Categories'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateStorage } from '../actions/storeAction'

class Store extends Component {
  componentDidMount() {
    axios.get('https://private-00f7e-zuema.apiary-mock.com/products')
    .then((res) => {
      this.props.updateStorage(res.data.products)
    })
    .catch((res) => {
      console.error(res) 
    })
  }

  render() {
    return(
      <div className="store">
        <div className="top-bar"  hidden>
          <h3 className="no-margin">
            <i className="fa fa-search icon-margin"></i>
            SEARCH
          </h3>
        </div>
        <Categories/>
        <div className="store-header">
          <div className="inner-header" >
            <hr className="line"/>
            <h2 className="product-text-margin">ALL PRODUCT</h2> 
            <hr className="line"/>
          </div>
        </div>
        {this.props.products.map((itm, id) => {
          return <ProductCard name={itm.name} detail={itm.short_description} id={itm.product_id} price={itm.price} key={id}/>
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.storage.products,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateStorage: (products) => dispatch(updateStorage(products)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Store);
