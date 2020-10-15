import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import { App } from './App'
import { renderWithRouter } from 'utils/test/renderWithRouter'

describe('ZR Mobile', () => {
  it('Muestra el header de la aplicación', () => {
    renderWithRouter(<App />, '/')

    const headerText = screen.getByText('ZR Mobile')

    expect(headerText).toBeInTheDocument()
  })

  it('Muestra la página de listado de productos', async () => {
    renderWithRouter(<App />, '/')

    const listOfProducts = await screen.findByText('Lista de productos')

    expect(listOfProducts).toBeInTheDocument()
  })

  it('Muestra la página de detalle de un producto', () => {
    const productId = 'ZmGrkLRPXOTpxsU4jjAcv'
    renderWithRouter(<App />, `/${productId}`)

    const idProductoText = screen.getByText(productId)

    expect(idProductoText).toBeInTheDocument()
  })

  it('Navega al listado al hacer click en el title del header', async () => {
    renderWithRouter(<App />, 'ZmGrkLRPXOTpxsU4jjAcv')

    const headerTitle = screen.getByRole('link', { name: /zr mobile/i })

    fireEvent.click(headerTitle)

    const listOfProducts = await screen.findByText('Lista de productos')

    expect(listOfProducts).toBeInTheDocument()
  })
})
