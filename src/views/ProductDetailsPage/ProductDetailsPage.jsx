import React from 'react'
import { useParams } from 'react-router-dom'
import { DescriptionItem } from '../components/DescriptionItem'
import {
  ProductDetailPageContainer,
  ProductDetailPageDescription,
  ProductDetailPageImage,
} from './ProductDetailPage.styles'
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
      <ProductDetailPageContainer>
        <ProductDetailPageImage src={productDetail.imgUrl} />
        <ProductDetailPageDescription>
          <DescriptionItem title="Marca" value={productDetail.brand} />
          <DescriptionItem title="Modelo" value={productDetail.model} />
          <DescriptionItem title="Precio" value={`${productDetail.price} €`} />
          <DescriptionItem title="CPU" value={productDetail.cpu} />
          <DescriptionItem title="chipset" value={productDetail.chipset} />
          <DescriptionItem title="GPU" value={productDetail.gpu} />
          <DescriptionItem title="RAM" value={productDetail.ram} />
          <DescriptionItem title="Sistema Operativo" value={productDetail.os} />
          <DescriptionItem
            title="Resolución de pantalla"
            value={productDetail.displayResolution}
          />
          <DescriptionItem title="Batería" value={productDetail.battery} />
          <DescriptionItem
            title="Camara frontal"
            value={productDetail.secondaryCmera}
          />
          <DescriptionItem
            title="Camara trasera"
            value={productDetail.primaryCamera}
          />
          <DescriptionItem
            title="Dimensiones"
            value={productDetail.dimentions}
          />
          <DescriptionItem title="Peso" value={productDetail.weight} />
        </ProductDetailPageDescription>
      </ProductDetailPageContainer>
    </>
  )
}
