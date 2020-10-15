import styled from 'styled-components'
import { rem } from 'polished'

export const ProductDetailPageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ProductDetailPageImage = styled.img`
  flex-grow: 1;
  flex-basis: 0;
  width: 100%;
  margin-right: ${rem(32)};
`

export const ProductDetailPageDescription = styled.div`
  flex-grow: 1;
  flex-basis: 0;
`

export const ProductDetailBlock = styled.div`
  padding: ${rem(16)};
  margin-bottom: ${rem(16)};
  border-radius: ${rem(16)};
  border: 4px solid #eee;
`
