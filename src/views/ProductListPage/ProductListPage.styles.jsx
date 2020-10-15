import styled from 'styled-components'
import { rem } from 'polished'

export const ProductListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

export const ProductListTitle = styled.h1``

export const ProductListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: ${rem(16)};
  row-gap: ${rem(16)};
`

export const SearchInput = styled.input`
  padding: ${rem(8)};
  background-color: #eee;
  border: none;
  border-radius: ${rem(8)};
`
