import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('ZR Mobile', () => {
  it('Muestra el header de la aplicación', () => {
    render(<App />)

    const headerText = screen.getByText('ZR Mobile')

    expect(headerText).toBeInTheDocument()
  })

  it('Mue')
})
