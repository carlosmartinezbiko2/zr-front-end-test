import React from 'react'
import { useParams } from 'react-router-dom'

export function ProductDetailsPage() {
  const { productId } = useParams()

  return <>{productId}</>
}
