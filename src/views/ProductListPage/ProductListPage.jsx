import React from 'react'

export function ProductListPage() {
  const [productList, setProductList] = React.useState()
  React.useEffect(() => {
    getProductList().then(setProductList)
  }, [])

  return (
    <>
      Lista de productos
      {productList?.map((product) => (
        <article key={product.id}>{product.model}</article>
      ))}
    </>
  )
}

async function getProductList() {
  const response = await fetch(
    'https://front-test-api.herokuapp.com/api/product',
  )
  const productList = await response.json()
  return productList
}
