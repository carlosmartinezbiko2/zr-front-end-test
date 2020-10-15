import style from 'styled-components'
import { rem } from 'polished'
import { ReactComponent as SmartphoneIcon } from 'icons/smartphone.svg'

export const HeaderIcon = style(SmartphoneIcon)`
    height: ${rem(32)};
    background: white;
    padding: ${rem(4)};
    border-radius: 50%;

    margin-right: ${rem(8)};
`
