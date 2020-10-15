import React from 'react'

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
        <article key={product.id}>{product.model}</article>
      ))}
    </>
  )
}
