export default function shipmentReducer(state = { purchaseList: [] }, action) {
  if(action.type === 'UPDATE_SHIPMENT') {
    return { purchaseList: action.payload.purchaseList }
  }
  return state;
}