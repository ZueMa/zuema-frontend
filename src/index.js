import React from 'react';
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { Route, Switch } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import './stylesheets/index.css'
import 'bootstrap/dist/css/bootstrap.css'

// Components
import logo from './res/logo.png'
import NavButton from './components/NavButton'

// Reducers

// Pages
import Cart from './pages/Cart'
import Login from './pages/Login'
import Store from './pages/Store'
import Profile from './pages/Profile'
import Product from './pages/Product'
import AddProduct from './pages/AddProduct'
import EditProduct from './pages/EditProduct'

const history = createHistory()

const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

ReactDOM.render(
  <div className="App">
    <div className="Nav">
      <div className="NavContainer">
        <img className="Logo" src={logo} alt="logo"/>
      </div>
      <div>
        <NavButton text="HOME" url="/" shape="circle"/>
        <NavButton text="CART" url="/cart" shape="circle"/>
        <NavButton text="PROFILE" url="/profile" shape="circle"/>
      </div>
      <NavButton text="LOGIN" url="/login" shape="rec"/>
    </div>
    <div className="Store">
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={Store}/>
            <Route exact path="/products/:id" component={Product}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/addproduct" component={AddProduct}/>
            <Route exact path="/editproduct" component={EditProduct}/>
          </Switch>
        </ConnectedRouter>
      </Provider>
    </div>
  </div>
  , document.getElementById('root')
)
