import React from 'react'
import { Switch, Route } from 'react-router-dom'

export function App() {
  return (
    <>
      <header>ZR Mobile</header>
      <Switch>
        <Route exact path="/">
          Lista de productos
        </Route>
      </Switch>
    </>
  )
}
