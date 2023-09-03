import { useEffect, type ChangeEvent } from 'react'
import { useShopi } from '../hooks'

export const SearchBar = () => {
  const {
    searchByTitle,
    updateSearchTitle,
    clearSearchTitle,
    currentPathname,
    updatePathname
  } = useShopi()

  useEffect(() => {
    if (currentPathname !== location.pathname) {
      clearSearchTitle()
      updatePathname(location.pathname)
    }
  }, [currentPathname, location, clearSearchTitle])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateSearchTitle(e.target.value)
  }

  return (
    <div className='mt-6 flex items-center justify-center'>
      <input
        onChange={handleChange}
        value={searchByTitle}
        className='h-[50px] w-[240px] rounded-md border border-gray-800 bg-slate-100 px-3 py-2'
        type='text'
        placeholder='Search product'
      />
    </div>
  )
}
