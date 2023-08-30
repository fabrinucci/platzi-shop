import { Cards } from '../components'
import { useProducts } from '../hooks'
import { SkeletonCards } from '../components/SkeletonCards'

export const Home = () => {
  const { products, loading } = useProducts(null)
  return (
    <section>
      <h3 className='mb-5 mt-8 text-center text-2xl'>Our Special Products</h3>
      {loading ? <SkeletonCards /> : <Cards products={products} />}
    </section>
  )
}
