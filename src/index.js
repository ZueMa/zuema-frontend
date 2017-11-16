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
import cookieReducer from './reducers/cookieReducer'
import storeReducer from './reducers/storeReducer'
import productReducer from './reducers/productReducer'
import cartReducer from './reducers/cartReducer'
import shipmentReducer from './reducers/shipmentReducer'

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
import AdminLogin from './pages/admin/AdminLogin'
import Logout from './pages/Logout'
import Shipment from './pages/admin/Shipment'

const history = createHistory()

const middleware = routerMiddleware(history)

const store = createStore(
  combineReducers({
    cart: cartReducer,
    cookie: cookieReducer,
    product: productReducer,
    storage: storeReducer,
    router: routerReducer,
    shipment: shipmentReducer
  }),
  applyMiddleware(middleware)
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <App>          
          <Route exact path="/" component={Store}/>
          <Route path="/products/:id" component={Product}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/login" component={Login}/>
          <Route path="/orderhistoryseller" component={OrderHistorySeller}/>
          <Route path="/purchasehistorybuyer" component={PurchaseHistoryBuyer}/>
          <Route path="/itempurchaseTable/:id" component={ItemPurchaseTable}/>
          <Route path="/register/" component={Register}/>
          <Route path="/registerseller" component={RegisterSeller}/>
          <Route path="/registerbuyer" component={RegisterBuyer}/>
          <Route exact path="/addproduct" component={AddProduct}/>
          <Route exact path="/editproduct" component={EditProduct}/>
          <Route path="/admin/" component={AdminLogin} />
          <Route path="/purchases" component={Shipment} />
          <Route path="/logout" component={Logout} />
        </App>
      </Switch>
    </ConnectedRouter>
  </Provider>
  ,document.getElementById('root')
)
