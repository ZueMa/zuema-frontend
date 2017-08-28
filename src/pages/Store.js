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
        <div className="TopBar" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center'}} hidden>
          <h3 style={{margin: '0'}}>
            <i className="fa fa-search" style={{marginRight: '10px'}}></i>
            SEARCH
          </h3>
        </div>
        <Categories/>
        <div style={{color: 'grey', textAlign: 'center'}}>
          <div style={{display: 'inline-flex', alignItems: 'center', marginTop: '15px'}}>
            <hr className="line"/>
            <h2 style={{marginLeft: '10px', marginRight: '10px'}}>ALL PRODUCT</h2> 
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
