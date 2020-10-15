import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

export function renderWithRouter(component, initialPath) {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>{component}</MemoryRouter>,
  )
}
