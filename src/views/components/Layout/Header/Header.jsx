import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../CartContext'
import { CartStatus } from './CartStatus/CartStatus'
import { HeaderContainer, TitleWrapper } from './Header.styles'
import { HeaderIcon } from './HeaderIcon'

export function Header() {
  const { numberOfItems } = useCartContext()
  return (
    <HeaderContainer>
      <Link to="/">
        <TitleWrapper>
          <HeaderIcon />
          ZR Mobile
        </TitleWrapper>
      </Link>
      <CartStatus numberOfItems={numberOfItems} />
    </HeaderContainer>
  )
}
