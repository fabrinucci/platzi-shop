import { Categories } from '../../types'
import { Cards } from '../components'
import { useProducts } from '../hooks'

export const Electronics = () => {
  const products = useProducts(Categories.Electronics)
  return (
    <main>
      <h3 className='mb-5 mt-8 text-center text-2xl'>Electronics</h3>
      <Cards products={products} />
    </main>
  )
}
