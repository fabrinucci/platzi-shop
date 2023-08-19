import { useEffect, useState } from 'react'
import { Cards } from '../components'
import { type Product } from '../../types'
import { getAllProducts } from '../services'

export const Home = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const products = await getAllProducts()
      setProducts(products!)
    }
    void getProducts()
  }, [])
  return (
    <main>
      <h1 className='text-center text-4xl font-semibold'>Shopi Eccomerce</h1>
      <h3 className='mb-5 mt-8 text-center text-2xl'>Our Products</h3>
      <Cards products={products} />
    </main>
  )
}
