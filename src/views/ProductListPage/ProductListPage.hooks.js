import { useQuery } from 'react-query'
import { productService } from 'core/productService'

export function useProductList() {
  const { data: productList, isLoading, isError } = useQuery(
    'productList',
    productService.getProductList,
    { staleTime: 60 * 60 * 1000, cacheTime: 60 * 60 * 1000 },
  )

  return { productList, isLoading, isError }
}
