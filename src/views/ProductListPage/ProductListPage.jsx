import React from 'react'
import { ProductListItem } from './components/ProductListItem'

import { useProductList } from './ProductListPage.hooks'

export function ProductListPage() {
  const { productList, isError, isLoading } = useProductList()

  if (isLoading) {
    return <>Cargando...</>
  }

  if (isError) {
    return <>Ups! Ha ocurrido un error</>
  }

  return (
    <>
      Lista de productos
      {productList?.map((product) => (
        <ProductListItem key={product.id} data={product} />
      ))}
    </>
  )
}
