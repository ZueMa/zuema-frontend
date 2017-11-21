export default function adminProductsReducer(state = { products: [] }, action) {
    if(action.type === 'UPDATE_ADMINPRODUCTS') {
      return { products: action.payload.products}
    }
    return state;
  }