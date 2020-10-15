import React from 'react'
import { ProductListItem } from './components/ProductListItem'

import { useProductList } from './ProductListPage.hooks'
import {
  ProductListContainer,
  ProductListHeader,
  ProductListTitle,
} from './ProductListPage.styles'

export function ProductListPage() {
  const { productList, isError, isLoading } = useProductList([])
  const [searchValue, setSearchValue] = React.useState('')

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
        <label>
          Buscar:{' '}
          <input
            name="search"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </label>
      </ProductListHeader>

      <ProductListContainer>
        {filterProductsList(productList, searchValue).map((product) => (
          <ProductListItem key={product.id} data={product} />
        ))}
      </ProductListContainer>
    </>
  )
}

function filterProductsList(productList = [], filter = '') {
  if (!filter) {
    return productList
  }

  return productList.filter(
    (product) =>
      product.brand.includes(filter) || product.model.includes(filter),
  )
}
