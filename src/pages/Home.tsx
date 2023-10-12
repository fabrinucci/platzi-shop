import { Cards, SearchBar } from '../components'
import { SkeletonCards } from '../components/SkeletonCards'
import { useShopi } from '../hooks'
import { useEffect } from 'react'
import { type Categories } from '../../types'
import { useLocation } from 'react-router-dom'
import { capitalizeWords } from '../utils'
import { Slider } from '../components/Slider'

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
    <>
      <section className='mt-6'>
        <Slider />
      </section>
      <div className='sm:px-6'>
        <section className='mt-6 flex items-center justify-center'>
          <SearchBar />
        </section>
        <section>
          <div>
            <h3 className='mb-5 mt-8 text-center text-2xl'>
              {path.length === 1
                ? 'Our Special Products'
                : capitalizeWords(path)}
            </h3>
            {loading && <SkeletonCards />}

            {filteredProducts.length === 0 && searchByTitle.length > 0 ? (
              <h4 className='mt-5 text-center text-lg'>
                No product matches your search: {searchByTitle}
              </h4>
            ) : (
              <Cards products={filteredProducts} />
            )}
          </div>
        </section>
      </div>
    </>
  )
}
