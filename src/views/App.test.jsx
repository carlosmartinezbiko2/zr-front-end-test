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

  it('Muestra la página de detalle de un producto', async () => {
    const productId = 'ZmGrkLRPXOTpxsU4jjAcv'
    const productModel = 'Iconia Talk S'
    renderWithRouter(<App />, `/${productId}`)

    const products = await screen.findAllByText(productModel)

    expect(products).toHaveLength(2)
  })

  it('Navega al listado al hacer click en el title del header', async () => {
    renderWithRouter(<App />, 'ZmGrkLRPXOTpxsU4jjAcv')

    const headerTitle = screen.getByRole('link', { name: /zr mobile/i })

    fireEvent.click(headerTitle)

    const listOfProducts = await screen.findByText('Lista de productos')

    expect(listOfProducts).toBeInTheDocument()
  })

  it('Navega al detalle al hacer click en un producto', async () => {
    const productModel = 'Iconia Talk S'
    renderWithRouter(<App />, '/')

    const product = await screen.findByText(productModel)

    fireEvent.click(product)

    const products = await screen.findAllByText(productModel)

    expect(products).toHaveLength(2)
  })
})
