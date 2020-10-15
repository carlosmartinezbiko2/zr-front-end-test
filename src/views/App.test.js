import React from 'react'
import { screen } from '@testing-library/react'
import { App } from './App'
import { renderWithRouter } from '../utils/test/renderWithRouter'

describe('ZR Mobile', () => {
  it('Muestra el header de la aplicación', () => {
    renderWithRouter(<App />, '/')

    const headerText = screen.getByText('ZR Mobile')

    expect(headerText).toBeInTheDocument()
  })

  it('Muestra la página de listado de productos', () => {
    renderWithRouter(<App />, '/')

    const listaDeProductosText = screen.getByText('Lista de productos')

    expect(listaDeProductosText).toBeInTheDocument()
  })

  it('Muestra la página de detalle de un producto', () => {
    const productId = 'productId'
    renderWithRouter(<App />, `/${productId}`)

    const idProductoText = screen.getByText(productId)

    expect(idProductoText).toBeInTheDocument()
  })
})
