import { Cards } from '../components'
import { useProducts } from '../hooks'

export const Home = () => {
  const products = useProducts(null)
  return (
    <main>
      <h3 className='mb-5 mt-8 text-center text-2xl'>Our Products</h3>
      <Cards products={products} />
    </main>
  )
}
