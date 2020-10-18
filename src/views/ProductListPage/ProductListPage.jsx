import React from 'react'
import { Link } from 'react-router-dom'
import { ProductListItem } from './components/ProductListItem'
import { useProductList } from './ProductListPage.hooks'
import {
  ProductListContainer,
  ProductListHeader,
  ProductListTitle,
  SearchInput,
} from './ProductListPage.styles'

export function ProductListPage() {
  const { productList, isError, isLoading } = useProductList([])
  const [searchValue, setSearchValue] = React.useState('')

  if (isError) {
    return <>Ups! Ha ocurrido un error</>
  }

  if (isLoading || !productList || !productList.length) {
    return <>Cargando...</>
  }

  return (
    <>
      <ProductListHeader>
        <ProductListTitle>Lista de productos</ProductListTitle>
        <label>
          Buscar:{' '}
          <SearchInput
            name="search"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
        </label>
      </ProductListHeader>

      <ProductListContainer>
        {filterProductsList(productList, searchValue).map((product) => (
          <Link to={`/${product.id}`} key={product.id}>
            <ProductListItem data={product} />
          </Link>
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
