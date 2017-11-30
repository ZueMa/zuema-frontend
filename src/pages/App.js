import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import logo from '../res/logo.png'
import NavButton from '../components/NavButton'

class App extends Component {
  render() {
    let component = '';
    if (this.props.location.pathname === '/admin' || this.props.location.pathname === '/purchases' || this.props.location.pathname === '/shipment' || this.props.location.pathname === '/adminProducts') {
      let logoutComponent = '';
      let shipment = '';
      let product = '';
      if (this.props.type === 'admin') {
        logoutComponent = <NavButton text="LOGOUT" url="/logout" shape="rec" isPink={true}/>
        shipment = (
          <div className="link-block">
            <i className="fa fa-2x fa-truck"/>
            <div className="link" onClick={() => this.props.push(`/purchases`)}>&nbsp;CONFIRM PRODUCT SHIPMENTS</div>
          </div>
        )
        product = (
          <div className="link-block">
            <i className="fa fa-2x fa-check-circle"/>
            <div className="link" onClick={() => this.props.push(`/adminProducts`)}>&nbsp;CONFIRM NEW PRODUCT</div>
          </div>
        )
      }
      component = (
        <div className="nav-admin">
          <div className="nav-inner-admin">
            <div className="nav-logo">
              <img className="logo-large" src={logo} alt="logo"/>
              <p className="admin-text">ADMINISTRATION</p>
            </div>
              <div className="nav-container-admin nav-add-margin">
                {shipment}
                 {product}
              </div>
            </div>
            {logoutComponent}
          </div>
      )
    } else if (this.props.type === 'seller') {
      component = (
          <div className="nav">
            <div className="nav-logo">
              <img className="logo" src={logo} alt="logo"/>
            </div> 
            <div>
              <NavButton text="HOME" icon="fa fa-home" url="/" shape="circle"/>
              <NavButton text="ADD PRODUCT" icon="fa fa-cart-plus" url="/addproduct" shape="circle"/>
              <NavButton text="PROFILE" icon="fa fa-user" url="/profile" shape="circle"/>
            </div>
            <NavButton text="LOGOUT" url="/logout" shape="rec"/>
          </div>
      )
    } else if (this.props.type === 'buyer') {
      component = (
          <div className="nav">
            <div className="nav-logo">
              <img className="logo" src={logo} alt="logo"/>
            </div> 
            <div>
              <NavButton text="HOME" icon="fa fa-home" url="/" shape="circle"/>
              <NavButton text="CART" icon="fa fa-shopping-cart" url="/cart" shape="circle"/>
              <NavButton text="PROFILE" icon="fa fa-user" url="/profile" shape="circle"/>
            </div>
            <NavButton text="LOGOUT" url="/logout" shape="rec"/>
          </div>
      )
    } else {
      component = (
          <div className="nav">
            <div className="nav-logo">
              <img className="logo" src={logo} alt="logo"/>
            </div> 
            <div>
              <NavButton text="HOME" icon="fa fa-home" url="/" shape="circle"/>
              <NavButton text="CART" icon="fa fa-shopping-cart" url="/cart" shape="circle"/>
              <NavButton text="PROFILE" icon="fa fa-user" url="/profile" shape="circle"/>
            </div>
            <NavButton text="LOGIN" url="/login" shape="rec"/>
          </div>
      )
    }
    return (
      <div className="app">
        {component}
          <div className="store">
            {this.props.children}
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    type: state.cookie.type,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    push: (url) => dispatch(push(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
