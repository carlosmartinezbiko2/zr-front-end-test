import styled from 'styled-components'
import { rem } from 'polished'
import { colors, sizes } from 'theme'

export const DescriptionItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: ${rem(sizes.tiny)} 0;

  border-bottom: 2px solid ${colors.gray};
`

export const DescriptionItemTitle = styled.span`
  font-weight: bold;
`
