import React, { Component } from 'react'
import ProductCard from '../components/ProductCard'
import '../stylesheets/store.css'
import Categories from '../components/Categories'

export const products = [{name:"PRODUCT NAME", detail:"Short description", price: 130.25, stock: 5},
                         {name:"PRODUCT NAME", detail:"Short description", price: 130.25, stock: 5},
                         {name:"PRODUCT NAME", detail:"Short description", price: 130.25, stock: 5},
                         {name:"PRODUCT NAME", detail:"Short description", price: 130.25, stock: 5},
                         {name:"PRODUCT NAME", detail:"Short description", price: 130.25, stock: 5},
                         {name:"PRODUCT NAME", detail:"Short description", price: 130.25, stock: 5},
                         {name:"PRODUCT NAME", detail:"Short description", price: 130.25, stock: 5},
                         {name:"PRODUCT NAME", detail:"Short description", price: 130.25, stock: 5},
                         {name:"PRODUCT NAME", detail:"Short description", price: 130.25, stock: 5},
                         {name:"PRODUCT NAME", detail:"Short description", price: 130.25, stock: 5},
                         {name:"PRODUCT NAME", detail:"Short description", price: 130.25, stock: 5},
                         {name:"PRODUCT NAME", detail:"Short description", price: 130.25, stock: 5},
                         {name:"PRODUCT NAME", detail:"Short description", price: 130.25, stock: 5},
                         {name:"PRODUCT NAME", detail:"Short description", price: 130.25, stock: 5},
                         {name:"PRODUCT NAME", detail:"Short description", price: 130.25, stock: 5}]

class Store extends Component {
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
        {products.map((itm, id) => {
          return <ProductCard name={itm.name} detail={itm.detail} id={id} price={itm.price} key={id}/>
        })}
      </div>
    )
  }
}

export default Store;
