import { rest } from 'msw'
import productList from './fixtures/productList.json'

export const handlers = [
  rest.get(
    'https://front-test-api.herokuapp.com/api/product',
    (req, res, ctx) => res(ctx.status(200), ctx.json(productList)),
  ),
]
