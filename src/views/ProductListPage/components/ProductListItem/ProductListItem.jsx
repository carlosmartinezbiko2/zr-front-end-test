import React from 'react'
import {
  DescriptionItemTitle,
  DescriptionItemValue,
  DescriptionWrapper,
  ProductListItemImage,
  ProductListItemWrapper,
} from './ProductListItem.styles'

export function ProductListItem({ data }) {
  return (
    <ProductListItemWrapper>
      <ProductListItemImage src={data.imgUrl} />
      <DescriptionWrapper>
        <p>
          <DescriptionItemTitle>Marca: </DescriptionItemTitle>
          <DescriptionItemValue>{data.brand}</DescriptionItemValue>
        </p>
        <p>
          <DescriptionItemTitle>Modelo: </DescriptionItemTitle>
          <DescriptionItemValue>{data.model}</DescriptionItemValue>
        </p>
        <p>
          <DescriptionItemTitle>Precio: </DescriptionItemTitle>
          <DescriptionItemValue>{data.price} €</DescriptionItemValue>
        </p>
      </DescriptionWrapper>
    </ProductListItemWrapper>
  )
}
