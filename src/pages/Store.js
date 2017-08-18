import React, { Component } from 'react'
import ProductCard from '../components/ProductCard'
import '../stylesheets/Store.css'

class Store extends Component {
  render() {
    return(
      <div className="Store">
        <div>
          <div style={{height: '50px', width: '100%', color: 'grey', textAlign: 'center'}}>
            <h2>- ALL PRODUCT -</h2> 
          </div>
        </div>
        <div>
          <ProductCard name="PRODUCT NAME" detail="SHORT DESCRIPTION" id={0} price={130.25}/>
          <ProductCard name="PRODUCT NAME" detail="SHORT DESCRIPTION" id={0} price={130.25}/>
          <ProductCard name="PRODUCT NAME" detail="SHORT DESCRIPTION" id={0} price={130.25}/>
          <ProductCard name="PRODUCT NAME" detail="SHORT DESCRIPTION" id={0} price={130.25}/>
          <ProductCard name="PRODUCT NAME" detail="SHORT DESCRIPTION" id={0} price={130.25}/>
          <ProductCard name="PRODUCT NAME" detail="SHORT DESCRIPTION" id={0} price={130.25}/>
          <ProductCard name="PRODUCT NAME" detail="SHORT DESCRIPTION" id={0} price={130.25}/>
          <ProductCard name="PRODUCT NAME" detail="SHORT DESCRIPTION" id={0} price={130.25}/>
          <ProductCard name="PRODUCT NAME" detail="SHORT DESCRIPTION" id={0} price={130.25}/>
          <ProductCard name="PRODUCT NAME" detail="SHORT DESCRIPTION" id={0} price={130.25}/>
          <ProductCard name="PRODUCT NAME" detail="SHORT DESCRIPTION" id={0} price={130.25}/>
          <ProductCard name="PRODUCT NAME" detail="SHORT DESCRIPTION" id={0} price={130.25}/>
          <ProductCard name="PRODUCT NAME" detail="SHORT DESCRIPTION" id={0} price={130.25}/>
          <ProductCard name="PRODUCT NAME" detail="SHORT DESCRIPTION" id={0} price={130.25}/>
          <ProductCard name="PRODUCT NAME" detail="SHORT DESCRIPTION" id={0} price={130.25}/>
        </div>
        
      </div>
    )
  }
}

export default Store;

