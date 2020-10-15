import React from 'react'
import { DescriptionItemTitle } from './DescriptionItem.styles'

export function DescriptionItem({ title, value }) {
  return (
    <div>
      <DescriptionItemTitle>{title}: </DescriptionItemTitle>
      <span>{value}</span>
    </div>
  )
}
