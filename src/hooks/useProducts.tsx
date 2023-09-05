import { useEffect, useState } from 'react'
import { getAllProducts, getProductsByCategory } from '../services'
import { type Categories, type Product } from '../../types'

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  const [searchByTitle, setSearchByTitle] = useState<string>('')
  const [category, setCategory] = useState<Categories | 'all'>('all')

  const selectCategory = (category: Categories | 'all') => {
    setCategory(category)
  }

  const updateSearchTitle = (value: React.SetStateAction<string>) => {
    setSearchByTitle(value)
  }

  const clearSearchTitle = () => {
    setSearchByTitle('')
  }

  const filteredProductsByTitle = (
    products: Product[],
    searchByTitle: string
  ) => {
    return products.filter(
      (product) =>
        product?.title.toLowerCase().includes(searchByTitle.toLowerCase())
    )
  }

  useEffect(() => {
    if (searchByTitle.length > 0) {
      setFilteredProducts(filteredProductsByTitle(products, searchByTitle))
    }

    if (searchByTitle.length === 0) {
      setFilteredProducts(products)
    }
  }, [products, searchByTitle])

  useEffect(() => {
    const getProducts = async () => {
      if (category === 'all') {
        const data = await getAllProducts()
        const products = data?.products
        if (!products) return
        setProducts(products)
      } else {
        const data = await getProductsByCategory(category)
        const products = data?.products
        if (!products) return
        setProducts(products)
      }
    }

    void getProducts().then(() => {
      setLoading(false)
    })
  }, [category])

  return {
    products,
    loading,
    searchByTitle,
    filteredProducts,
    updateSearchTitle,
    selectCategory,
    clearSearchTitle,
    category
  }
}
