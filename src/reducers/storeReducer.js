export default function storeReducer(state = { products: [] }, action) {
  if(action.type === 'UPDATE_STORAGE') {
    return { products: action.payload.products }
  }
  return state;
}