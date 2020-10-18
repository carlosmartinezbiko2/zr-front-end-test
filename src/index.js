import React from 'react'
import ReactDOM from 'react-dom'
import { ReactQueryConfigProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from 'theme/GlobalStyles/GlobalStyles'

import { App } from './views/App'
import { CartContextProvider } from './views/components/CartContext'

const reactQueryTestConfig = {
  queries: {
    staleTime: 60 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
  },
}

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <ReactQueryConfigProvider config={reactQueryTestConfig}>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ReactQueryConfigProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
