export function updateShipment(purchaseList) {
  console.log(purchaseList)
  return {
    type: 'UPDATE_SHIPMENT',
    payload: { purchaseList },
  }
}