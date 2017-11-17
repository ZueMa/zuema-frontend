export function updateAdminProducts(products) {
    console.log(products)
    return {
      type: 'UPDATE_ADMINPRODUCTS',
      payload: { products },
    }
  }