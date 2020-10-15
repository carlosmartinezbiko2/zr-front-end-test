import React from 'react'
import { ProductListItem } from './components/ProductListItem'

import { useProductList } from './ProductListPage.hooks'
import {
  ProductListContainer,
  ProductListHeader,
  ProductListTitle,
} from './ProductListPage.styles'

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
      <ProductListHeader>
        <ProductListTitle>Lista de productos</ProductListTitle>
      </ProductListHeader>

      <ProductListContainer>
        {productList?.map((product) => (
          <ProductListItem key={product.id} data={product} />
        ))}
      </ProductListContainer>
    </>
  )
}
