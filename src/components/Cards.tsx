import { type Product } from '../../types'
import { useShoppingCart } from '../hooks'

interface Props {
  products: Product[]
}

export const Cards = ({ products }: Props) => {
  const { count, setCount } = useShoppingCart()

  return (
    <section className='grid grid-cols-1 place-items-center gap-4 px-10 sm:grid-cols-auto-fit sm:place-items-stretch'>
      {products?.map((item) => {
        const { id, category, image, price, title } = item
        return (
          <article
            key={id}
            className='max-w-[250px] rounded-sm border border-gray-400 p-6'
          >
            <figure className='relative'>
              <span className='absolute bottom-[12px] left-2 rounded-md bg-blue-600 p-1 text-sm font-bold text-slate-200 shadow-md shadow-[#7191cc]'>
                {category}
              </span>
              <img
                className='h-48 w-full rounded-md'
                src={image}
                alt={title}
              ></img>
              <div
                onClick={() => {
                  setCount(count + 1)
                }}
                className='absolute right-2 top-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-blue-600 p-1 font-bold text-slate-200'
              >
                +
              </div>
            </figure>

            <div className='mt-3 flex items-start justify-between gap-2'>
              <p className='font-semibold'>{title.slice(0, 20)}</p>
              <span className='text-sm font-semibold'>${price}</span>
            </div>
          </article>
        )
      })}
    </section>
  )
}
