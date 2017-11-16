export function updateShipment(purchaseList) {
  console.log('shipmentAtion')
  return {
    type: 'UPDATE_SHIPMENT',
    payload: { purchaseList },
  }
}