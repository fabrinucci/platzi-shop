import { ShoppingCartButton } from './'
import { Bars3Icon, UserCircleIcon } from '@heroicons/react/24/outline'
import { CategoriesMenu } from './CategoriesMenu'
import { AccountMenu } from './AccountMenu'
import { useShopi } from '../hooks'

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
    <nav className='fixed top-0 z-50 flex w-full items-center justify-between border-b-2 border-gray-400 bg-slate-100 px-6 py-4'>
      <button
        className='cursor-pointer lg:hidden'
        onClick={handleToggleCategories}
      >
        <Bars3Icon className='w-8' />
      </button>

      <aside
        className={`${
          isOpenCategories ? 'flex' : 'hidden'
        } fixed left-0 top-16 z-10 h-80 w-36 items-center justify-center rounded-sm border-2 border-l-0 border-gray-400 bg-slate-100 duration-300 ease-in sm:h-[400px] sm:w-48 lg:hidden`}
      >
        <CategoriesMenu />
      </aside>

      <section className='hidden lg:block'>
        <CategoriesMenu />
      </section>

      <button
        className='cursor-pointer sm:hidden'
        onClick={handleToggleAccount}
      >
        <UserCircleIcon className='w-8' />
      </button>

      <section className='flex gap-4'>
        <aside
          className={`${
            isOpenAccount ? 'flex' : 'hidden'
          } fixed left-[50%] top-16 z-10 h-40 w-32 -translate-x-[50%] items-center justify-center rounded-sm border-2 border-gray-400 bg-slate-100 duration-300 ease-in sm:hidden`}
        >
          <AccountMenu />
        </aside>

        <section className='hidden sm:block'>
          <AccountMenu />
        </section>

        <ShoppingCartButton />
      </section>
    </nav>
  )
}
