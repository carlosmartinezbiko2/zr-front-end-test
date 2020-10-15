import React from 'react'
import { DescriptionItem } from 'views/components/DescriptionItem'
import {
  ProductListItemImage,
  ProductListItemWrapper,
} from './ProductListItem.styles'

export function ProductListItem({ data }) {
  return (
    <ProductListItemWrapper>
      <ProductListItemImage src={data.imgUrl} />
      <DescriptionItem title="Marca" value={data.brand} />
      <DescriptionItem title="Modelo" value={data.model} />
      <DescriptionItem title="Precio" value={`${data.price} €`} />
    </ProductListItemWrapper>
  )
}
