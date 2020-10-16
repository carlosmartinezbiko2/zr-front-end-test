import { css } from 'styled-components'
import { breakpoints } from './breakpoints'

export const media = {
  tablet: (...args) => css`
    @media (min-width: ${breakpoints.mobile + 1}px) {
      ${css(...args)};
    }
  `,
  desktop: (...args) => css`
    @media (min-width: ${breakpoints.tablet + 1}px) {
      ${css(...args)};
    }
  `,
}
