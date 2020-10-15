import React from 'react'
import { HeaderContainer, TitleWrapper } from './Header.styles'
import { HeaderIcon } from './HeaderIcon'

export function Header() {
  return (
    <HeaderContainer>
      <TitleWrapper>
        <HeaderIcon />
        ZR Mobile
      </TitleWrapper>
    </HeaderContainer>
  )
}
