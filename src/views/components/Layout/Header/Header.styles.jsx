import styled from 'styled-components'
import { rem } from 'polished'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;

  padding: ${rem(8)};

  border-bottom: solid 1px black;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  font-size: ${rem(24)};
`
