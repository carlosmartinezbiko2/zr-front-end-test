import React from 'react'
import { productService } from 'core/productService'

export function ProductListPage() {
  const [productList, setProductList] = React.useState()
  React.useEffect(() => {
    productService.getProductList().then(setProductList)
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
