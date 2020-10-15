import React from 'react'

const cartContext = React.createContext({
  numberOfItems: 0,
  setNumberOfItems: () => undefined,
})

const { Provider } = cartContext

export function CartContextProvider({ children }) {
  const [numberOfItems, setNumberOfItems] = React.useState(0)

  return (
    <Provider value={{ numberOfItems, setNumberOfItems }}>{children}</Provider>
  )
}

export const useCartContext = () => React.useContext(cartContext)
