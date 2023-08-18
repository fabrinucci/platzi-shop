import { NavLink } from 'react-router-dom'

const menu1 = [
  {
    path: '/',
    name: 'Shopi',
    className: 'font-bold text-xl'
  },
  {
    path: '/clothes',
    name: 'clothes',
    className: ''
  },
  {
    path: '/electronics',
    name: 'electronics',
    className: ''
  },
  {
    path: '/furnitures',
    name: 'furnitures',
    className: ''
  },
  {
    path: '/others',
    name: 'others',
    className: ''
  },
  {
    path: '/toys',
    name: 'toys',
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
    <nav className='fixed top-0 z-10 flex w-full items-center justify-between border-b-2 border-gray-400 px-6 py-4'>
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
      </ul>
    </nav>
  )
}
