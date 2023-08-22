import { Categories } from '../../types'
import { Cards, SkeletonCards } from '../components'
import { useProducts } from '../hooks'

export const Electronics = () => {
  const { products, loading } = useProducts(Categories.Electronics)
  return (
    <main>
      <h3 className='mb-5 mt-8 text-center text-2xl'>Electronics</h3>
      {loading ? <SkeletonCards /> : <Cards products={products} />}
    </main>
  )
}
