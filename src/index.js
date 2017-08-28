import React from 'react';
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { Route, Switch } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import './stylesheets/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import App from './pages/App'

// Reducers
import appReducer from './reducers/appReducer'
// Pages
import Cart from './pages/Cart'
import Login from './pages/Login'
import Store from './pages/Store'
import Profile from './pages/Profile'
import Product from './pages/Product'
import CartEdit from './pages/CartEdit'

const history = createHistory()

const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    app: appReducer,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>          
        <Switch>
          <Route exact path="/" component={Store}/>
          <Route path="/products/:id" component={Product}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>
  ,document.getElementById('root')
)