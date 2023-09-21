import { NavLink } from 'react-router-dom'
import { Categories } from '../../types'

const menu1 = [
  {
    path: '/',
    name: 'All',
    className: 'font-semibold text-xl'
  },
  {
    path: `/category/${Categories.Smartphones}`,
    name: 'Smartphones',
    className: ''
  },
  {
    path: `/category/${Categories.Fragrances}`,
    name: 'Fragrances',
    className: ''
  },
  {
    path: `/category/${Categories.Laptops}`,
    name: 'Laptops',
    className: ''
  },
  {
    path: `/category/${Categories.MensShirts}`,
    name: 'Mens Shirts',
    className: ''
  },
  {
    path: `/category/${Categories.Tops}`,
    name: 'Tops',
    className: ''
  }
]

export const CategoriesMenu = () => {
  const activeStyle = 'underline underline-offset-8 lg:underline-offset-4'
  return (
    <ul className='flex flex-col gap-4 lg:flex-row lg:items-center'>
      <li className='hidden lg:block'>
        <NavLink to='/' aria-label='Go to home'>
          <figure>
            <img className='w-8' src='/shopi.webp' alt='' />
          </figure>
        </NavLink>
      </li>
      {menu1.map(({ name, path, className }) => (
        <li key={name}>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : '')}
            aria-label={`View ${name.toLowerCase()} products`}
            to={path}
          >
            <span className={className}>{name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
