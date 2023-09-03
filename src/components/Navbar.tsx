import { NavLink } from 'react-router-dom'
import { ShoppingCartButton } from './'
import { useShopi } from '../hooks'
import { Categories } from '../../types'

interface MenuProps {
  path: string
  name: string
  className: string
  category?: Categories | null
}

const menu1: MenuProps[] = [
  {
    path: '/',
    name: 'Shopi',
    className: 'font-bold text-xl',
    category: null
  },
  {
    path: '/category/mens-clothes',
    name: "Men's Clothes",
    className: '',
    category: Categories.MensClothing
  },
  {
    path: '/category/womens-clothes',
    name: "Women's Clothes",
    className: '',
    category: Categories.WomensClothing
  },
  {
    path: '/category/electronics',
    name: 'Electronics',
    className: '',
    category: Categories.Electronics
  },
  {
    path: '/category/jewelery',
    name: 'Jewelery',
    className: '',
    category: Categories.Jewelery
  }
]

const menu2 = [
  {
    path: '/my-orders',
    name: 'My Orders',
    className: ''
  },
  {
    path: '/my-account',
    name: 'My Account',
    className: ''
  },
  {
    path: '/sign-in',
    name: 'Sign In',
    className: ''
  }
]

export const Navbar = () => {
  const { selectCategory } = useShopi()
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className='fixed top-0 z-50 flex w-full items-center justify-between border-b-2 border-gray-400 bg-slate-100 px-6 py-4'>
      <ul className='flex items-center gap-4'>
        {menu1.map(({ name, path, className, category }) => (
          <li key={name}>
            <NavLink
              onClick={() => {
                selectCategory(category!)
              }}
              to={path}
              className={({ isActive }) =>
                isActive && name !== 'Shopi' ? activeStyle : ''
              }
            >
              <span className={className}>{name}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className='flex items-center gap-4'>
        {menu2.map(({ name, path, className }) => (
          <li key={name}>
            <NavLink
              to={path}
              className={({ isActive }) => (isActive ? activeStyle : '')}
            >
              <span className={className}>{name}</span>
            </NavLink>
          </li>
        ))}
        <li>
          <ShoppingCartButton />
        </li>
      </ul>
    </nav>
  )
}
