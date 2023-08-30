import { Cards, SkeletonCards } from '../components'
import { useProducts } from '../hooks'
import { Categories } from '../../types'

export const WomensClothes = () => {
  const { products, loading } = useProducts(Categories.WomensClothing)
  return (
    <section>
      <h3 className='mb-5 mt-8 text-center text-2xl'>{"Women's Clothing"}</h3>
      {loading ? <SkeletonCards /> : <Cards products={products} />}
    </section>
  )
}
