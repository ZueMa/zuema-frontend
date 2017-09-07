export default function productReducer(state = { data: {} }, action) {
  if(action.type === 'UPDATE_PRODUCT') {
    return { data: action.payload.product }
  }
  return state;
}