import { rest } from 'msw'
import productList from './fixtures/productList.json'
import productDetail from './fixtures/productDetail.json'

export const handlers = [
  rest.get(`${process.env.REACT_APP_API_URL}/product`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(productList)),
  ),
  rest.get(
    `${process.env.REACT_APP_API_URL}/product/ZmGrkLRPXOTpxsU4jjAcv`,
    (req, res, ctx) => res(ctx.status(200), ctx.json(productDetail)),
  ),
]
