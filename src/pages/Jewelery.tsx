import { Cards } from '../components'
import { useProducts } from '../hooks'
import { Categories } from '../../types'

export const Jewelery = () => {
  const products = useProducts(Categories.Jewelery)
  return (
    <main>
      <h3 className='mb-5 mt-8 text-center text-2xl'>Jewelery</h3>
      <Cards products={products} />
    </main>
  )
}
