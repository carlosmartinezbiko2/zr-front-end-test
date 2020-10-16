import React from 'react'

import { cartService } from 'core/cartService'
import { useCartContext } from 'views/components/CartContext'

export function AddToCart({ productId, colors, storages }) {
  const [selectedColor, setSelectedColor] = React.useState(
    colors.length === 1 ? colors[0].code : undefined,
  )
  const [selectedStorage, setSelectedStorage] = React.useState(
    storages.length === 1 ? storages[0].code : undefined,
  )
  const { setNumberOfItems } = useCartContext()
  const [isLoading, setIsLoading] = React.useState(false)

  return (
    <>
      <select
        value={selectedColor}
        onChange={(event) => setSelectedColor(event.target.value)}
      >
        {!selectedColor && <option>Elige color</option>}
        {colors.map((color) => (
          <option key={color.code} value={color.code}>
            {color.name}
          </option>
        ))}
      </select>
      <select
        value={selectedStorage}
        onChange={(event) => setSelectedStorage(event.target.value)}
      >
        {!selectedStorage && <option>Elige almacenamiento</option>}
        {storages.map((storage) => (
          <option key={storage.code} value={storage.code}>
            {storage.name}
          </option>
        ))}
      </select>
      <button
        onClick={handleAddToCartSubmit}
        disabled={!selectedColor || !selectedStorage || isLoading}
      >
        Agregar al carro
      </button>
    </>
  )

  function handleAddToCartSubmit() {
    setIsLoading(true)

    cartService
      .addProduct(productId, selectedColor, selectedStorage)
      .then(({ count }) => setNumberOfItems(count))
      .finally(() => setIsLoading(false))
  }
}
