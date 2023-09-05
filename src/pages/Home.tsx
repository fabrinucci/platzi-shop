import { Cards, SearchBar } from '../components'
import { SkeletonCards } from '../components/SkeletonCards'
import { useShopi } from '../hooks'
import { useEffect } from 'react'
import { type Categories } from '../../types'
import { useLocation } from 'react-router-dom'

export const Home = () => {
  const { filteredProducts, loading, searchByTitle, selectCategory } =
    useShopi()

  const location = useLocation()
  let path = location.pathname
  if (path.length > 1) {
    path = location.pathname.substring(10)
  }

  useEffect(() => {
    if (path.length === 1) {
      selectCategory('all')
      return
    }
    selectCategory(path as Categories)
  }, [path])

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
