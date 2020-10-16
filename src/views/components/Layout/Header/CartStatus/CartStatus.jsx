import React from 'react'
import { CartIcon, Badge, CartStatusWrapper } from './CartStatus.styles'

export function CartStatus({ numberOfItems }) {
  return (
    <CartStatusWrapper>
      <CartIcon />
      <Badge>{numberOfItems}</Badge>
    </CartStatusWrapper>
  )
}
