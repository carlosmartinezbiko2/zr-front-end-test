import styled from 'styled-components'
import { rem } from 'polished'
import { sizes, colors } from 'theme'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${rem(sizes.mini)};

  background-color: ${colors.gray};
  border-radius: ${rem(sizes.tiny)};
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  font-size: ${rem(sizes.base)};
`
