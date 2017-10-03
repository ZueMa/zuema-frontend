import React, { Component } from 'react'
import logo from '../res/logo.png'
import NavButton from '../components/NavButton'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    let component = '';
    if (this.props.type === 'seller') {
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

export default connect(mapStateToProps)(App)
