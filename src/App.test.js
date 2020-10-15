import React from 'react'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('ZR Mobile', () => {
  it('Renderiza la aplicación', () => {
    render(<App />)

    const holaMundo = screen.getByText('Hola mundo')

    expect(holaMundo).toBeInTheDocument()
  })
})
