import { useEffect, useState } from 'react'
import { getAllProducts } from '../services'
import { type Categories, type Product } from '../../types'

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  const [searchByTitle, setSearchByTitle] = useState<string>('')
  const [category, setCategory] = useState<Categories | null>(null)

  const selectCategory = (category: Categories | null) => {
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

  const filteredProductsByCategory = (
    products: Product[],
    category: Categories
  ) => {
    return products.filter(
      (product) => product?.category.toLowerCase() === category.toLowerCase()
    )
  }

  useEffect(() => {
    if (category) {
      setFilteredProducts(filteredProductsByCategory(products, category))
    }
    if (searchByTitle.length > 0) {
      setFilteredProducts(filteredProductsByTitle(products, searchByTitle))
    }

    if (category && searchByTitle.length > 0) {
      setFilteredProducts(
        filteredProductsByCategory(products, category).filter((product) => {
          return product?.title
            .toLowerCase()
            .includes(searchByTitle.toLowerCase())
        })
      )
    }

    if (!category && searchByTitle.length === 0) {
      setFilteredProducts(products)
    }
  }, [products, category, searchByTitle])

  useEffect(() => {
    const getProducts = async () => {
      const products = await getAllProducts()
      if (!products) return
      setProducts(products)
    }
    void getProducts().then(() => {
      setLoading(false)
    })
  }, [])

  return {
    products,
    loading,
    searchByTitle,
    filteredProducts,
    updateSearchTitle,
    selectCategory,
    clearSearchTitle
  }
}
