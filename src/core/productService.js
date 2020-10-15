async function getProductList() {
  const response = await fetch(
    'https://front-test-api.herokuapp.com/api/product',
  )
  const productList = await response.json()
  return productList
}

export const productService = { getProductList }
