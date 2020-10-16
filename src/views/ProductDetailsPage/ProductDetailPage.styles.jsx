import styled from 'styled-components'
import { rem } from 'polished'
import { sizes, colors } from 'theme'

export const ProductDetailPageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ProductDetailPageImage = styled.img`
  flex-grow: 1;
  flex-basis: 0;
  flex-shrink: 1;
  width: 100%;
  min-width: ${rem(600)};
  margin-right: ${rem(sizes.medium)};
`

export const ProductDetailPageDescription = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  flex-shrink: 1;
`

export const ProductDetailBlock = styled.div`
  padding: ${rem(sizes.small)};
  margin-bottom: ${rem(sizes.small)};
  border-radius: ${rem(sizes.small)};
  border: 4px solid ${colors.gray};
`

export const ProductModel = styled.h1`
  font-size: ${rem(sizes.base)};
  margin-bottom: ${rem(sizes.tiny)};
`

export const ProductBrand = styled.h2`
  font-size: ${rem(sizes.small)};
  color: ${colors.middleGray};
  margin-bottom: ${rem(sizes.base)};
`
