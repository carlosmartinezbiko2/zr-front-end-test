import styled from 'styled-components'
import { rem } from 'polished'
import { colors, media, sizes } from 'theme'

export const ProductListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: ${rem(sizes.small)};
`

export const ProductListTitle = styled.h1`
  font-size: ${rem(sizes.base)};
`

export const ProductListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: ${rem(sizes.small)};
  row-gap: ${rem(sizes.small)};

  ${media.tablet`
   grid-template-columns: repeat(2, 1fr);
  `}

  ${media.desktop`
    grid-template-columns: repeat(4, 1fr);
  `}
`

export const SearchInput = styled.input`
  padding: ${rem(sizes.tiny)};
  background-color: ${colors.gray};
  border: none;
  border-radius: ${rem(sizes.tiny)};
`
