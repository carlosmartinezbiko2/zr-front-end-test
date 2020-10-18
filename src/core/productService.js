async function getProductList() {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/product`)

  if (!response.ok) {
    throw new Error('Request error')
  }

  const productList = await response.json()
  return productList
}

async function getProductDetail(id) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/product/${id}`)

  if (!response.ok) {
    throw new Error('Request error')
  }

  const productList = await response.json()
  return productList
}

export const productService = { getProductList, getProductDetail }
