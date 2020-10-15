import styled from 'styled-components'
import { rem } from 'polished'

export const ProductListItemWrapper = styled.article`
  padding: ${rem(16)};
  border-radius: ${rem(16)};
  border: 4px solid #eee;

  &:hover {
    background-color: #eee;
  }
`

export const ProductListItemImage = styled.img`
  width: 100%;
`
