export function updateStorage(products) {
  return {
    type: 'UPDATE_STORAGE',
    payload: { products },
  }
}