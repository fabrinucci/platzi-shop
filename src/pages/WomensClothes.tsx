import { Cards } from '../components'
import { useProducts } from '../hooks'
import { Categories } from '../../types'

export const WomensClothes = () => {
  const products = useProducts(Categories.WomensClothing)
  return (
    <main>
      <h3 className='mb-5 mt-8 text-center text-2xl'>{"Women's Clothing"}</h3>
      <Cards products={products} />
    </main>
  )
}
