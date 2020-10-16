import style from 'styled-components'
import { rem } from 'polished'
import { sizes, colors } from 'theme'
import { ReactComponent as ShoppingCartIcon } from 'icons/shopping-cart.svg'
import styled from 'styled-components'

export const CartStatusWrapper = styled.div`
  position: relative;
`

export const CartIcon = style(ShoppingCartIcon)`
  height: ${rem(sizes.base)};
`

export const Badge = styled.div`
  position: absolute;
  left: ${rem(-sizes.tiny)};
  bottom: ${rem(-sizes.tiny)};
  padding: ${rem(sizes.xtiny)} ${rem(sizes.tiny)};
  background-color: ${colors.white};
  border-radius: 50%;
`
