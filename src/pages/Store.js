import React, { Component } from 'react'
import ProductCard from '../components/ProductCard'
import '../stylesheets/store.css'
import Categories from '../components/Categories'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateStorage } from '../actions/storeAction'

class Store extends Component {
  componentDidMount() {
    this.props.updateStorage([])
    if (this.props.type === 'seller') {
      axios.get('http://localhost:8000/sellers/' + this.props.id +'/products/')
      .then((res) => {
        this.props.updateStorage(res.data.products)
      })
      .catch((res) => {
        console.error(res) 
      })
    } else {
      axios.get('http://localhost:8000/products/')
      .then((res) => {
        console.log(res.data.products)
        this.props.updateStorage(res.data.products)
      })
      .catch((res) => {
        console.error(res) 
      })
    }
  }

  render() {
    let products = [];
    if (this.props.type === 'seller') {
      products = this.props.products
    } else {
      products = this.props.products.filter((itm) => {
        return itm.num_stocks > 0
      })
    }
    return(
      <div className="store">
        <div className="top-bar" hidden>
          <h3 className="no-margin">
            <i className="fa fa-search icon-margin"></i>
            SEARCH
          </h3>
        </div>
        <Categories/>
        <div id="all">
          <div className="store-header">
            <div className="inner-header" >
              <hr className="line"/>
              <h2 className="product-text-margin">ALL PRODUCT</h2> 
              <hr className="line"/>
            </div>
          </div>
          {products.map((itm, id) => {
            return <ProductCard name={itm.name} detail={itm.short_description} id={itm.product_id} price={itm.price} key={id} image={itm.image}/>
          })}
        </div>
        <div id="cosmetics">
          <div className="store-header">
            <div className="inner-header" >
              <hr className="line"/>
              <h2 className="product-text-margin">Cosmetics</h2> 
              <hr className="line"/>
            </div>
          </div>
          {products.map((itm, id) => {
            if(itm.category === 'Cosmetics')
              return <ProductCard name={itm.name} detail={itm.short_description} id={itm.product_id} price={itm.price} key={id} image={itm.image}/>
            return null
          })}
        </div>
        <div id="clothes">
          <div className="store-header">
            <div className="inner-header" >
              <hr className="line"/>
              <h2 className="product-text-margin">Clothes</h2> 
              <hr className="line"/>
            </div>
          </div>
          {products.map((itm, id) => {
            if(itm.category === 'Clothes')
              return <ProductCard name={itm.name} detail={itm.short_description} id={itm.product_id} price={itm.price} key={id} image={itm.image}/>
            return null
          })}
        </div>
        <div id="electronics">
          <div className="store-header">
            <div className="inner-header" >
              <hr className="line"/>
              <h2 className="product-text-margin">Electronics</h2> 
              <hr className="line"/>
            </div>
          </div>
          {products.map((itm, id) => {
            if(itm.category === 'Electronics')
              return <ProductCard name={itm.name} detail={itm.short_description} id={itm.product_id} price={itm.price} key={id} image={itm.image}/>
            return null
          })}
        </div>
        <div id="home-garden">
          <div className="store-header">
            <div className="inner-header" >
              <hr className="line"/>
              <h2 className="product-text-margin">Home & Garden</h2> 
              <hr className="line"/>
            </div>
          </div>
          {products.map((itm, id) => {
            if(itm.category === 'Home & Garden')
              return <ProductCard name={itm.name} detail={itm.short_description} id={itm.product_id} price={itm.price} key={id} image={itm.image}/>
            return null
          })}
        </div>
        <div id="kids">
          <div className="store-header">
            <div className="inner-header" >
              <hr className="line"/>
              <h2 className="product-text-margin">Kids</h2> 
              <hr className="line"/>
            </div>
          </div>
          {products.map((itm, id) => {
            if(itm.category === 'Kids')
              return <ProductCard name={itm.name} detail={itm.short_description} id={itm.product_id} price={itm.price} key={id} image={itm.image}/>
            return null
          })}
        </div>
        <div id="sports">
          <div className="store-header">
            <div className="inner-header" >
              <hr className="line"/>
              <h2 className="product-text-margin">Sports</h2> 
              <hr className="line"/>
            </div>
          </div>
          {products.map((itm, id) => {
            if(itm.category === 'Sports')
              return <ProductCard name={itm.name} detail={itm.short_description} id={itm.product_id} price={itm.price} key={id} image={itm.image}/>
            return null
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    id: state.cookie.id,
    type: state.cookie.type,
    products: state.storage.products,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateStorage: (products) => dispatch(updateStorage(products)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Store);
