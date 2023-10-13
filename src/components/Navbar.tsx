import { SearchBar, ShoppingCartButton } from './'
import { Bars3Icon, UserCircleIcon } from '@heroicons/react/24/outline'
import { CategoriesMenu } from './CategoriesMenu'
import { AccountMenu } from './AccountMenu'
import { useShopi } from '../hooks'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const {
    isOpenCategories,
    isOpenAccount,
    openAccount,
    openCategories,
    closeAccount,
    closeCategories,
    closeCart,
    closeDetail
  } = useShopi()

  const handleToggleCategories = () => {
    if (!isOpenCategories) {
      openCategories()
      closeAccount()
      closeCart()
      closeDetail()
    } else {
      closeCategories()
    }
  }

  const handleToggleAccount = () => {
    if (!isOpenAccount) {
      openAccount()
      closeCategories()
      closeCart()
      closeDetail()
    } else {
      closeAccount()
    }
  }

  return (
    <nav className='fixed top-0 z-50 flex w-full flex-col  bg-slate-100'>
      <div className='flex w-full items-center justify-around gap-3 px-4 py-4'>
        <button
          className='cursor-pointer lg:hidden'
          onClick={handleToggleCategories}
        >
          <Bars3Icon className='w-8' />
        </button>

        <aside
          className={`${
            isOpenCategories ? 'flex' : 'hidden'
          } fixed left-0 top-20 z-10 h-80 w-36 items-center justify-center rounded-sm border-2 border-l-0 border-gray-400 bg-slate-100 duration-300 ease-in sm:h-[400px] sm:w-48 lg:hidden`}
        >
          <CategoriesMenu />
        </aside>

        <div className='hidden lg:block'>
          <Link
            to='/'
            aria-label='Go to home'
            onClick={() => {
              window.scrollTo(0, 0)
            }}
            className='flex items-center gap-2'
          >
            <figure>
              <img className='w-10' src='/shopi.webp' alt='' />
            </figure>
            <h1 className='text-4xl font-semibold'>Shopi</h1>
          </Link>
        </div>

        <section className=''>
          <SearchBar />
        </section>

        <section className='flex gap-4'>
          <aside
            className={`${
              isOpenAccount ? 'flex' : 'hidden'
            } fixed right-0 top-20 z-10 h-40 w-32 items-center justify-center rounded-sm border-2 border-r-0 border-gray-400 bg-slate-100 duration-300 ease-in sm:w-40 lg:hidden`}
          >
            <AccountMenu />
          </aside>

          <section className='hidden lg:block'>
            <AccountMenu />
          </section>

          <div className='flex items-center gap-2'>
            <button
              className='cursor-pointer lg:hidden'
              onClick={handleToggleAccount}
            >
              <UserCircleIcon className='w-8' />
            </button>
            <ShoppingCartButton />
          </div>
        </section>
      </div>

      <section className='hidden lg:block lg:pt-4'>
        <CategoriesMenu />
      </section>
    </nav>
  )
}
