import React from 'react'
import { Header } from './Header'
import { ContentContainer, LayoutContainer } from './Layout.styles'

export function Layout({ children }) {
  return (
    <LayoutContainer>
      <Header />
      <ContentContainer>{children}</ContentContainer>
    </LayoutContainer>
  )
}
