async function addProduct(id, colorCode, storageCode) {
  const response = await fetch(
    'https://front-test-api.herokuapp.com/api/cart',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        colorCode: +colorCode,
        storageCode: +storageCode,
      }),
    },
  )
  const data = await response.json()

  return data
}

export const cartService = { addProduct }
