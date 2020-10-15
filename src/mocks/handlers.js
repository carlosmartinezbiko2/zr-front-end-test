import { rest } from 'msw'
import productList from './fixtures/productList.json'
import productDetail from './fixtures/productDetail.json'

export const handlers = [
  rest.get(
    'https://front-test-api.herokuapp.com/api/product',
    (req, res, ctx) => res(ctx.status(200), ctx.json(productList)),
  ),
  rest.get(
    'https://front-test-api.herokuapp.com/api/product/ZmGrkLRPXOTpxsU4jjAcv',
    (req, res, ctx) => res(ctx.status(200), ctx.json(productDetail)),
  ),
]
