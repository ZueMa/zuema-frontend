export function updateProduct(product) {
  return {
    type: 'UPDATE_PRODUCT',
    payload: { product },
  }
}