export function updateCart(cart_id, total_price, cartList) {
  console.log('cartAtion')
  return {
    type: 'UPDATE_CART',
    payload: { cart_id, total_price, cartList },
  }
}