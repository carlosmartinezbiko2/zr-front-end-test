import React from 'react'
import { DescriptionItemWrapper } from './DescriptionItem.styles'
import { DescriptionItemTitle } from './DescriptionItem.styles'

export function DescriptionItem({ title, value }) {
  return (
    <DescriptionItemWrapper>
      <DescriptionItemTitle>{title}: </DescriptionItemTitle>
      <span>{value}</span>
    </DescriptionItemWrapper>
  )
}
