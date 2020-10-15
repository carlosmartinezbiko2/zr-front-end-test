import React from 'react'
import { screen } from '@testing-library/react'
import { Route } from 'react-router-dom'
import { renderWithRouter } from 'utils/test/renderWithRouter'

import { ProductDetailsPage } from './ProductDetailsPage'

describe('ProductDetailsPage', () => {
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
