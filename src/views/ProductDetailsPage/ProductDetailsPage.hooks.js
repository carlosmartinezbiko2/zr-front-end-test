import { useQuery } from 'react-query'
import { productService } from 'core/productService'

export function useProductDetail(id) {
  const { data: productDetail, isLoading, isError } = useQuery(
    ['productList', id],
    () => productService.getProductDetail(id),
  )

  return { productDetail, isLoading, isError }
}
