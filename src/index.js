import React from 'react';
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { Route, Switch } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import './stylesheets/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import App from './pages/App'

// Reducers
import storeReducer from './reducers/storeReducer'
// Pages
import Cart from './pages/Cart'
import Login from './pages/Login'
import Store from './pages/Store'
import Profile from './pages/Profile'
import Product from './pages/Product'
import AddProduct from './pages/AddProduct'
import EditProduct from './pages/EditProduct'
import OrderHistorySeller from './pages/OrderHistorySeller'
import PurchaseHistoryBuyer from './pages/PurchaseHistoryBuyer'
import ItemPurchaseTable from './pages/ItemPurchaseTable'
import Register from './pages/Register'
import RegisterSeller from './pages/RegisterSeller'
import RegisterBuyer from './pages/RegisterBuyer'

const history = createHistory()

const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    storage: storeReducer,
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
          <Route path="/orderhistoryseller" component={OrderHistorySeller}/>
          <Route path="/purchasehistorybuyer" component={PurchaseHistoryBuyer}/>
          <Route path="/itempurchaseTable/:id" component={ItemPurchaseTable}/>
          <Route path="/register" component={Register}/>
          <Route path="/registerseller" component={RegisterSeller}/>
          <Route path="/registerbuyer" component={RegisterBuyer}/>
          <Route exact path="/addproduct" component={AddProduct}/>
          <Route exact path="/editproduct" component={EditProduct}/>
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>
  ,document.getElementById('root')
)
