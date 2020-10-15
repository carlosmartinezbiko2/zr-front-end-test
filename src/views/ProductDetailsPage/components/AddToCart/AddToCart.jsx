import React from 'react'

export function AddToCart({ colors, storages, onSubmit }) {
  const [selectedColor, setSelectedColor] = React.useState(
    colors.length === 1 ? colors[0].code : undefined,
  )
  const [selectedStorage, setSelectedStorage] = React.useState(
    storages.length === 1 ? storages[0].code : undefined,
  )

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
        onClick={() => onSubmit({ selectedColor, selectedStorage })}
        disabled={!selectedColor || !selectedStorage}
      >
        Agregar al carro
      </button>
    </>
  )
}
