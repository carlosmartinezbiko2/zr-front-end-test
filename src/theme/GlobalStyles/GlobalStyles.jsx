import { rem } from 'polished'
import { createGlobalStyle, css } from 'styled-components'

import { reboot } from './reboot'
import { reset } from './reset'
import { colors } from '../colors'
import { sizes } from '../size'

const scrollStyles = css`
  scroll-behavior: smooth;

  @supports (-webkit-overflow-scrolling: touch) {
    * {
      -webkit-overflow-scrolling: touch;
    }
  }
  @supports not (-webkit-overflow-scrolling: touch) {
    overflow: auto;

    ::-webkit-scrollbar {
      width: ${rem(sizes.tiny)};
      border: 0;
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${colors.darkGray};
      border-radius: 0;
    }
  }
`

const globalStyles = css`
  ${scrollStyles};
`

export const GlobalStyles = createGlobalStyle`
  ${reset};
  ${reboot};
  ${globalStyles};
`
