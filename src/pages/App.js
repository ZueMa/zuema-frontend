import React, { Component } from 'react'
import logo from '../res/logo.png'
import NavButton from '../components/NavButton'

class App extends Component {
  render() {
    return(
      <div className="app">
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
        <div className="store">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App
