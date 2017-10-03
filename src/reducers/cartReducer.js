export default function cartReducer(state = { cart_id: '', total_price: '', cartList: [] }, action) {
  console.log('cartReducer')
  if(action.type === 'UPDATE_CART') {
    return { cart_id: action.payload.cart_id, total_price: action.payload.total_price, cartList: action.payload.cartList }
  }
  return state;
}