import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Layout } from './components/Layout'

import { ProductDetailsPage } from './ProductDetailsPage'
import { ProductListPage } from './ProductListPage'

export function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <ProductListPage />
        </Route>
        <Route path="/:productId">
          <ProductDetailsPage />
        </Route>
      </Switch>
    </Layout>
  )
}
