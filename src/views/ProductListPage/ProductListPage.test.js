import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

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

  it('Filtra por el campo de búsqueda', async () => {
    render(<ProductListPage />)

    const searchInput = screen.getByRole('textbox', { name: /buscar:/i })

    fireEvent.change(searchInput, { target: { value: 'Iconia B1' } })

    const products = await screen.findAllByRole('article')

    expect(products).toHaveLength(2)
  })
})
