import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ReactQueryConfigProvider } from 'react-query'

const reactQueryTestConfig = {
  queries: {
    staleTime: 0,
    retry: false,
    cacheTime: 0,
  },
}

export function renderWithRouter(component, initialPath) {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <ReactQueryConfigProvider config={reactQueryTestConfig}>
        {component}
      </ReactQueryConfigProvider>
    </MemoryRouter>,
  )
}
