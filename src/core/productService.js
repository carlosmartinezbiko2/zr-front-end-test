async function getProductList() {
  const response = await fetch(
    'https://front-test-api.herokuapp.com/api/product',
  )
  const productList = await response.json()
  return productList
}

async function getProductDetail(id) {
  const response = await fetch(
    `https://front-test-api.herokuapp.com/api/product/${id}`,
  )
  const productList = await response.json()
  return productList
}

export const productService = { getProductList, getProductDetail }
