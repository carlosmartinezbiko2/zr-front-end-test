import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { App } from './App'

describe('ZR Mobile', () => {
  it('Muestra el header de la aplicación', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )

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

  it('Muestra la página de detalle de un producto', () => {
    const productId = 'productId'
    render(
      <MemoryRouter initialEntries={[`/${productId}`]}>
        <App />
      </MemoryRouter>,
    )

    const idProductoText = screen.getByText(productId)

    expect(idProductoText).toBeInTheDocument()
  })
})
