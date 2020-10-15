import React from 'react'
import { useParams } from 'react-router-dom'
import { useProductDetail } from './ProductDetailsPage.hooks'

export function ProductDetailsPage() {
  const { productId } = useParams()
  const { isError, isLoading, productDetail } = useProductDetail(productId)

  if (isLoading || !productDetail) {
    return <>Cargando...</>
  }

  if (isError) {
    return <>Ups! Ha ocurrido un error</>
  }

  return (
    <>
      <h2>{productDetail.model}</h2>
      <h3>{productDetail.brand}</h3>
    </>
  )
}
