import React from 'react'
import { screen } from '@testing-library/react'
import { Route } from 'react-router-dom'
import { rest } from 'msw'
import { renderWithRouter } from 'utils/test/renderWithRouter'

import { server } from 'mocks/server'
import { ProductDetailsPage } from './ProductDetailsPage'

describe('ProductDetailsPage', () => {
  it('Mustra un mensaje de error en caso de fallar la petición al API', async () => {
    const productId = 'ZmGrkLRPXOTpxsU4jjAcv'
    server.use(
      rest.get(
        `${process.env.REACT_APP_API_URL}/product/${productId}`,
        (req, res, ctx) => res(ctx.status(500), ctx.json({ error: 'Error' })),
      ),
    )

    renderWithRouter(
      <Route path="/:productId">
        <ProductDetailsPage />
      </Route>,
      `/${productId}`,
    )
    const errorText = await screen.findByText('Ups! Ha ocurrido un error')

    expect(errorText).toBeInTheDocument()
  })

  it('Muestra el detalle del producto del API', async () => {
    const productId = 'ZmGrkLRPXOTpxsU4jjAcv'
    const productBrand = 'Acer'
    const productModel = 'Iconia Talk S'
    renderWithRouter(
      <Route path="/:productId">
        <ProductDetailsPage />
      </Route>,
      `/${productId}`,
    )

    const productBrandText = await screen.findAllByText(productBrand)
    const productModelText = await screen.findAllByText(productModel)

    expect(productBrandText).toHaveLength(2)
    expect(productModelText).toHaveLength(2)
  })
})
