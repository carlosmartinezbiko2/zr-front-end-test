import { useQuery } from 'react-query'
import { productService } from 'core/productService'

export function useProductList() {
  const { data: productList, isLoading, isError } = useQuery(
    'productList',
    productService.getProductList,
  )

  return { productList, isLoading, isError }
}
