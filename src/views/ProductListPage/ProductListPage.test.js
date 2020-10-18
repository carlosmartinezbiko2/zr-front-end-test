import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import { renderWithRouter } from 'utils/test/renderWithRouter'
import { rest } from 'msw'

import productList from 'mocks/fixtures/productList.json'
import { server } from 'mocks/server'

import { ProductListPage } from './ProductListPage'

describe('ProductListPage', () => {
  it('Mustra un mensaje de error en caso de fallar la petición al API', async () => {
    server.use(
      rest.get(`${process.env.REACT_APP_API_URL}/product`, (req, res, ctx) =>
        res(ctx.status(500), ctx.json({ error: 'Error' })),
      ),
    )

    renderWithRouter(<ProductListPage />, '/')
    const errorText = await screen.findByText('Ups! Ha ocurrido un error')

    expect(errorText).toBeInTheDocument()
  })

  it('Muestra el listado de productos del API', async () => {
    renderWithRouter(<ProductListPage />, '/')

    for (let product of productList) {
      const productModelText = await screen.findByText(product.model)

      expect(productModelText).toBeInTheDocument()
    }
  })

  it('Filtra por el campo de búsqueda', async () => {
    renderWithRouter(<ProductListPage />, '/')

    const searchInput = screen.getByRole('textbox', { name: /buscar:/i })

    fireEvent.change(searchInput, { target: { value: 'Iconia B1' } })

    const products = await screen.findAllByRole('article')

    expect(products).toHaveLength(2)
  })
})
