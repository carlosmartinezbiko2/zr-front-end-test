import { rem } from 'polished'
import { createGlobalStyle, css } from 'styled-components'

import { reboot } from './reboot'
import { reset } from './reset'
import { colors } from '../colors'
import { sizes } from '../size'

const scrollStyles = css`
  scroll-behavior: smooth;
`

const globalStyles = css`
  ${scrollStyles};
`

export const GlobalStyles = createGlobalStyle`
  ${reset};
  ${reboot};
  ${globalStyles};
`
