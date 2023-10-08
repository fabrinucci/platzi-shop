import { Link } from 'react-router-dom'
import { Decoration, Electronics, Mens, Others, Womens } from '../../types'
import { addSpaceToCamelCase, convertToKebabCase } from '../utils'
import { useShopi } from '../hooks'

const menu = [
  {
    name: 'Electronics',
    categories: Object.keys(Electronics)
  },
  {
    name: 'Mens',
    categories: Object.keys(Mens)
  },
  {
    name: 'Womens',
    categories: Object.keys(Womens)
  },
  {
    name: 'Decoration',
    categories: Object.keys(Decoration)
  },
  {
    name: 'Others',
    categories: Object.keys(Others)
  }
]

export const CategoriesMenu = () => {
  const { closeCategories } = useShopi()

  return (
    <ul className='flex flex-col gap-4 sm:gap-8 lg:flex-row lg:items-center lg:gap-4'>
      <li className='hidden lg:block'>
        <Link
          to='/'
          aria-label='Go to home'
          onClick={() => {
            window.scrollTo(0, 0)
          }}
        >
          <figure>
            <img className='w-8' src='/shopi.webp' alt='' />
          </figure>
        </Link>
      </li>
      <li className='block lg:hidden'>
        <Link
          to='/'
          aria-label='Go to home'
          onClick={() => {
            window.scrollTo(0, 0)
            closeCategories()
          }}
        >
          All
        </Link>
      </li>
      {menu.map(({ name, categories }) => (
        <li
          className='group cursor-pointer transition-all duration-500'
          key={name}
          aria-label={`View ${name.toLowerCase()} products`}
        >
          <span className='block'>{name}</span>
          {categories && (
            <ul className='absolute left-[7.5rem] hidden w-[160px] -translate-y-4 flex-col gap-2 rounded-md bg-blue-500 px-2 py-6 text-white transition-all duration-500 group-hover:flex sm:left-[9rem] lg:left-auto lg:top-11 lg:w-auto lg:translate-y-0'>
              {categories.map((category) => (
                <li
                  className='rounded-sm p-1 transition-all duration-300 lg:hover:bg-blue-700'
                  key={category}
                >
                  <Link
                    onClick={() => {
                      window.scrollTo(0, 0)
                      closeCategories()
                    }}
                    className='block'
                    to={`/category/${convertToKebabCase(category)}`}
                  >
                    {addSpaceToCamelCase(category)}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}
