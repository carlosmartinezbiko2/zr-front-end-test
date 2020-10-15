import React from 'react'
import { useParams } from 'react-router-dom'
import { cartService } from '../../core/cartService'
import { useCartContext } from '../components/CartContext'
import { DescriptionItem } from '../components/DescriptionItem'
import { AddToCart } from './components/AddToCart'
import {
  ProductDetailBlock,
  ProductDetailPageContainer,
  ProductDetailPageDescription,
  ProductDetailPageImage,
} from './ProductDetailPage.styles'
import { useProductDetail } from './ProductDetailsPage.hooks'

export function ProductDetailsPage() {
  const { productId } = useParams()
  const { isError, isLoading, productDetail } = useProductDetail(productId)
  const { setNumberOfItems } = useCartContext()

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
          <ProductDetailBlock>
            <DescriptionItem title="Marca" value={productDetail.brand} />
            <DescriptionItem title="Modelo" value={productDetail.model} />
            <DescriptionItem
              title="Precio"
              value={`${productDetail.price} €`}
            />
            <DescriptionItem title="CPU" value={productDetail.cpu} />
            <DescriptionItem title="chipset" value={productDetail.chipset} />
            <DescriptionItem title="GPU" value={productDetail.gpu} />
            <DescriptionItem title="RAM" value={productDetail.ram} />
            <DescriptionItem
              title="Sistema Operativo"
              value={productDetail.os}
            />
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
          </ProductDetailBlock>
          <ProductDetailBlock>
            <AddToCart
              colors={productDetail.options.colors}
              storages={productDetail.options.storages}
              onSubmit={({ selectedColor, selectedStorage }) =>
                cartService
                  .addProduct(productDetail.id, selectedColor, selectedStorage)
                  .then(({ count }) => setNumberOfItems(count))
              }
            />
          </ProductDetailBlock>
        </ProductDetailPageDescription>
      </ProductDetailPageContainer>
    </>
  )
}
