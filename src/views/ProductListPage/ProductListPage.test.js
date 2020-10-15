import React from 'react'
import { render, screen } from '@testing-library/react'

import productList from 'mocks/fixtures/productList.json'

import { ProductListPage } from './ProductListPage'

describe('ProductListPage', () => {
  it('Muestra el listado de productos del API', async () => {
    render(<ProductListPage />)

    for (let product of productList) {
      const productModelText = await screen.findByText(product.model)

      expect(productModelText).toBeInTheDocument()
    }
  })
})
