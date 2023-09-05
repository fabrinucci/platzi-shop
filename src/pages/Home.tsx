import { useParams } from 'react-router-dom'
import { Cards, SearchBar } from '../components'
import { SkeletonCards } from '../components/SkeletonCards'
import { useShopi } from '../hooks'
import { useEffect } from 'react'
import { type Categories } from '../../types'

export const Home = () => {
  const { filteredProducts, loading, searchByTitle, selectCategory, category } =
    useShopi()
  const params = useParams()

  console.log(category)

  useEffect(() => {
    if (typeof params.category === 'undefined') {
      selectCategory('all')
      return
    }
    selectCategory(params.category as Categories)
  }, [params.category])

  return (
    <section>
      <SearchBar />
      <h3 className='mb-5 mt-8 text-center text-2xl'>Our Special Products</h3>
      {loading && <SkeletonCards />}

      {filteredProducts.length === 0 && searchByTitle.length > 0 ? (
        <h4 className='mt-5 text-center text-lg'>
          No product matches your search: {searchByTitle}
        </h4>
      ) : (
        <Cards products={filteredProducts} />
      )}
    </section>
  )
}
