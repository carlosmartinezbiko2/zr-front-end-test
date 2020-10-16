import { useQuery } from 'react-query'
import { productService } from 'core/productService'

export function useProductDetail(id) {
  const { data: productDetail, isLoading, isError } = useQuery(
    ['productList', id],
    () => productService.getProductDetail(id),
    { staleTime: 60 * 60 * 1000, cacheTime: 60 * 60 * 1000 },
  )

  return { productDetail, isLoading, isError }
}
