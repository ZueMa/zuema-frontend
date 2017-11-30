export function updateShipment(purchaseList) {
  return {
    type: 'UPDATE_SHIPMENT',
    payload: { purchaseList },
  }
}