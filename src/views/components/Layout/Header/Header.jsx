import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderContainer, TitleWrapper } from './Header.styles'
import { HeaderIcon } from './HeaderIcon'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <TitleWrapper>
          <HeaderIcon />
          ZR Mobile
        </TitleWrapper>
      </Link>
    </HeaderContainer>
  )
}
