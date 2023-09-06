import { useEffect, useRef, type ChangeEvent } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useShopi } from '../hooks'

export const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null)

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

  const activateInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className='relative h-[46px] w-[320px] overflow-hidden rounded-md border-2 border-slate-600'>
      <button
        onClick={activateInput}
        className='absolute left-[8px] top-[10px] outline-none'
        title='Search'
      >
        <MagnifyingGlassIcon className='h-6' />
      </button>
      <input
        ref={inputRef}
        onChange={handleChange}
        value={searchByTitle}
        className='flex h-full w-full items-center justify-center px-10 outline-none'
        type='text'
        placeholder='Search product'
      />
      {searchByTitle.length > 0 && (
        <button
          className='absolute right-[10px] top-[8px]'
          title='Clear search'
          onClick={() => {
            updateSearchTitle('')
          }}
        >
          <XMarkIcon className='h-6' />
        </button>
      )}
    </div>
  )
}
