import styled from 'styled-components'
import { rem } from 'polished'

export const ProductListItemWrapper = styled.article`
  padding: ${rem(16)};
  border-radius: ${rem(16)};
  border: 1px solid black;
`

export const ProductListItemImage = styled.img`
  width: 100%;
`

export const DescriptionWrapper = styled.div``

export const DescriptionItemTitle = styled.span`
  font-weight: bold;
`

export const DescriptionItemValue = styled.span``
