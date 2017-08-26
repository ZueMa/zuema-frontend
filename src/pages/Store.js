import React, { Component } from 'react'
import ProductCard from '../components/ProductCard'
import '../stylesheets/store.css'
import Categories from '../components/Categories'

export const products = [{name:"PRODUCT NAME", detail:"Short description", price: 130.25},
                         {name:"PRODUCT NAME", detail:"Short description", price: 130.25},
                         {name:"PRODUCT NAME", detail:"Short description", price: 130.25},
                         {name:"PRODUCT NAME", detail:"Short description", price: 130.25},
                         {name:"PRODUCT NAME", detail:"Short description", price: 130.25},
                         {name:"PRODUCT NAME", detail:"Short description", price: 130.25},
                         {name:"PRODUCT NAME", detail:"Short description", price: 130.25},
                         {name:"PRODUCT NAME", detail:"Short description", price: 130.25},
                         {name:"PRODUCT NAME", detail:"Short description", price: 130.25},
                         {name:"PRODUCT NAME", detail:"Short description", price: 130.25},
                         {name:"PRODUCT NAME", detail:"Short description", price: 130.25},
                         {name:"PRODUCT NAME", detail:"Short description", price: 130.25},
                         {name:"PRODUCT NAME", detail:"Short description", price: 130.25},
                         {name:"PRODUCT NAME", detail:"Short description", price: 130.25},
                         {name:"PRODUCT NAME", detail:"Short description", price: 130.25}]

class Store extends Component {
  render() {
    return(
      <div className="Store">
        <Categories/>
        <div style={{color: 'grey', textAlign: 'center'}}>
          <h2>- ALL PRODUCT -</h2> 
        </div>
        {products.map((itm, id) => {
          return <ProductCard name={itm.name} detail={itm.detail} id={id} price={itm.price} key={id}/>
        })}
      </div>
    )
  }
}

export default Store;
