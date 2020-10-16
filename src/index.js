import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from 'theme/GlobalStyles/GlobalStyles'

import { App } from './views/App'
import { CartContextProvider } from './views/components/CartContext'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
