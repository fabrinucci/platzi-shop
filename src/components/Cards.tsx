import { type Product } from '../../types'

interface Props {
  products: Product[]
}

export const Cards = ({ products }: Props) => {
  return (
    <section className='grid grid-cols-auto-fit gap-3'>
      {products?.map((item) => {
        const { id, category, image, price, title } = item
        return (
          <article
            key={id}
            className='max-w-[270px] rounded-sm border border-gray-400 p-6'
          >
            <figure className='relative'>
              <span className='absolute bottom-[12px] left-[7px] rounded-md bg-slate-300 p-1 text-sm font-bold shadow-md shadow-[#938484]'>
                {category}
              </span>
              <img
                className='h-48 w-full rounded-md bg-cover bg-no-repeat'
                src={image}
                alt={title}
              ></img>
              <div className='absolute right-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 p-1 font-bold'>
                +
              </div>
            </figure>

            <div className='mt-3 flex items-center justify-between'>
              <p>{title}</p>
              <span>${price}</span>
            </div>
          </article>
        )
      })}
    </section>
  )
}
