import styled from 'styled-components'
import { rem } from 'polished'
import { sizes } from 'theme'

export const LayoutContainer = styled.div`
  max-width: ${rem(1200)};
  margin: 0 auto;
`

export const ContentContainer = styled.div`
  padding-top: ${rem(sizes.small)};
`
