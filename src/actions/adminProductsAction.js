export function updateAdminProducts(products) {
    return {
      type: 'UPDATE_ADMINPRODUCTS',
      payload: { products },
    }
  }