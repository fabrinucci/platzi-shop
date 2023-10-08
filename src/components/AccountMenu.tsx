import { NavLink } from 'react-router-dom'
import { useShopi } from '../hooks'

const menu = [
  {
    path: '/my-orders',
    name: 'My Orders',
    className: '',
    session: true,
    noSession: true
  },
  {
    path: '/my-account',
    name: 'My Account',
    className: '',
    session: true,
    noSession: false
  },
  {
    path: '/sign-in',
    name: 'Sign In',
    className: '',
    session: false,
    noSession: true
  },
  {
    path: '/sign-up',
    name: 'Sign Up',
    className: '',
    session: false,
    noSession: true
  }
]

export const AccountMenu = () => {
  const { isInSession, closeAccount } = useShopi()
  const activeStyle = 'underline underline-offset-4'

  return (
    <ul className='flex flex-col gap-4 sm:flex-row'>
      {menu.map((menu) => {
        const { name, path, className, session, noSession } = menu
        if (!isInSession && noSession) {
          return (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? activeStyle : '')}
                onClick={() => {
                  window.scrollTo(0, 0)
                  closeAccount()
                }}
              >
                <span className={className}>{name}</span>
              </NavLink>
            </li>
          )
        }
        if (isInSession && session) {
          return (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? activeStyle : '')}
                onClick={() => {
                  window.scrollTo(0, 0)
                  closeAccount()
                }}
              >
                <span className={className}>{name}</span>
              </NavLink>
            </li>
          )
        }
        return null
      })}
    </ul>
  )
}
