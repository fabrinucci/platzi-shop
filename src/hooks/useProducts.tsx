import { useEffect, useState } from 'react'
import { getAllProducts } from '../services'
import { type Categories, type Product } from '../../types'

export const useProducts = (category: Categories | null = null) => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const getProducts = async () => {
      if (category) {
        const products = await getAllProducts(category)
        if (!products) return

        setProducts(products)
        return
      }

      const products = await getAllProducts()
      if (!products) return
      setProducts(products)
    }
    void getProducts().then(() => {
      setLoading(false)
    })
  }, [])

  return { products, loading }
}
