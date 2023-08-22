import { NavLink } from 'react-router-dom'
import { ShoppingCartButton } from './'

const menu1 = [
  {
    path: '/',
    name: 'Shopi',
    className: 'font-bold text-xl'
  },
  {
    path: '/mens-clothes',
    name: "Men's Clothes",
    className: ''
  },
  {
    path: '/womens-clothes',
    name: "Women's Clothes",
    className: ''
  },
  {
    path: '/electronics',
    name: 'Electronics',
    className: ''
  },
  {
    path: '/jewelery',
    name: 'Jewelery',
    className: ''
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
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className='fixed top-0 z-50 flex w-full items-center justify-between border-b-2 border-gray-400 bg-slate-100 px-6 py-4'>
      <ul className='flex items-center gap-4'>
        {menu1.map(({ name, path, className }) => (
          <li key={name}>
            <NavLink
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
