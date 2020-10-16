import styled from 'styled-components'
import { rem } from 'polished'

export const DescriptionItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: ${rem(8)} 0;

  border-bottom: 2px solid #eee;
`

export const DescriptionItemTitle = styled.span`
  font-weight: bold;
`
