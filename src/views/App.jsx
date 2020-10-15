import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { ProductDetailsPage } from './ProductDetailsPage'
import { ProductListPage } from './ProductListPage'

export function App() {
  return (
    <>
      <header>ZR Mobile</header>
      <Switch>
        <Route exact path="/">
          <ProductListPage />
        </Route>
        <Route path="/:productId">
          <ProductDetailsPage />
        </Route>
      </Switch>
    </>
  )
}
