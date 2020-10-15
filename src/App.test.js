import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { App } from './App'

describe('ZR Mobile', () => {
  it('Muestra el header de la aplicación', () => {
    render(<App />)

    const headerText = screen.getByText('ZR Mobile')

    expect(headerText).toBeInTheDocument()
  })

  it('Muestra la página de listado de productos', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )

    const listaDeProductosText = screen.getByText('Lista de productos')

    expect(listaDeProductosText).toBeInTheDocument()
  })
})
