import styled from 'styled-components'
import { rem } from 'polished'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${rem(12)};

  background-color: #eee;
  border-radius: ${rem(8)};
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  font-size: ${rem(24)};
`
