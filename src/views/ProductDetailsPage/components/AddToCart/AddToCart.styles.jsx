import styled from 'styled-components'
import { rem } from 'polished'
import { sizes, colors } from 'theme'

export const AddToCartInputLabel = styled.label`
  display: block;
  margin-bottom: ${rem(sizes.small)};
`

export const Select = styled.select`
  display: block;
  padding: ${rem(sizes.tiny)};
  background-color: ${colors.gray};
  border: none;
  border-radius: ${rem(sizes.tiny)};
  font-size: ${rem(sizes.small)};
  margin-top: ${rem(sizes.tiny)};
`

export const AddToCartButton = styled.button`
  padding: ${rem(sizes.mini)} ${rem(sizes.small)};
  background-color: ${colors.gray};
  border: none;
  border-radius: ${rem(sizes.tiny)};
  font-size: ${rem(sizes.small)};
  text-transform: uppercase;
  border: 2px solid ${colors.gray};

  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};

  ${(p) =>
    !p.disabled &&
    `&:hover {
    background: ${colors.white};
    border: 2px solid ${colors.gray};
  }`}
`
