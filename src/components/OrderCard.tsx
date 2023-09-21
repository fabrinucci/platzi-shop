import { XCircleIcon } from '@heroicons/react/24/outline'
import { useShopi } from '../hooks'
import { type ProductCart } from '../../types'

interface Props {
  product: ProductCart
  type: 'Cart' | 'Order'
}

export const OrderCard = ({ product, type }: Props) => {
  const { id, images, price, quantity, title } = product
  const { removeFromCart } = useShopi()

  return (
    <article
      key={id}
      className={`${
        type === 'Cart'
          ? 'items-start justify-start'
          : 'items-center justify-between'
      } flex w-full gap-4 border-b border-gray-500 py-4`}
    >
      <figure>
        <img className='h-16 w-16' src={images[0]} alt={title} />
      </figure>
      <h4>{title?.slice(0, 16)}</h4>
      <div className='flex flex-col gap-2 sm:flex-row sm:gap-4'>
        <p className='font-semibold'>
          ${Math.round(price * quantity * 100) / 100}
        </p>
        <div className='flex gap-1'>
          <h4>qty:</h4>
          <p>{quantity}</p>
        </div>
      </div>
      {type === 'Cart' && (
        <button
          onClick={() => {
            removeFromCart(product)
          }}
        >
          <XCircleIcon className='w-6 text-gray-500' />
        </button>
      )}
    </article>
  )
}
