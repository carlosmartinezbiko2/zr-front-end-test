async function addProduct(id, colorCode, storageCode) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      colorCode: +colorCode,
      storageCode: +storageCode,
    }),
  })

  if (!response.ok) {
    throw new Error('Request error')
  }

  const data = await response.json()

  return data
}

export const cartService = { addProduct }
