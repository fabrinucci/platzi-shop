import { Cards, SkeletonCards } from '../components'
import { useProducts } from '../hooks'
import { Categories } from '../../types'

export const Jewelery = () => {
  const { products, loading } = useProducts(Categories.Jewelery)
  return (
    <section>
      <h3 className='mb-5 mt-8 text-center text-2xl'>Jewelery</h3>
      {loading ? <SkeletonCards /> : <Cards products={products} />}
    </section>
  )
}
