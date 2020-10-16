import style from 'styled-components'
import { rem } from 'polished'
import { sizes, colors } from 'theme'
import { ReactComponent as SmartphoneIcon } from 'icons/smartphone.svg'

export const HeaderIcon = style(SmartphoneIcon)`
    height: ${rem(sizes.medium)};
    background: ${colors.white};
    padding: ${rem(sizes.xtiny)};
    border-radius: 50%;

    margin-right: ${rem(sizes.tiny)};
`
