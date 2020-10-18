async function getProductList() {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/product`,
  )
  const productList = await response.json()
  return productList
}

async function getProductDetail(id) {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/product/${id}`,
  )
  const productList = await response.json()
  return productList
}

export const productService = { getProductList, getProductDetail }
