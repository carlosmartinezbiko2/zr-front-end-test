import { createGlobalStyle, css } from 'styled-components'

import { reboot } from './reboot'
import { reset } from './reset'

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
