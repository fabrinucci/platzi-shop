import { XMarkIcon } from '@heroicons/react/20/solid'
import { XCircleIcon } from '@heroicons/react/24/outline'
import { useShoppingCart } from '../hooks'
import { totalPrice } from '../utils'

export const Cart = () => {
  const { count, cart, isOpenCart, closeCart, removeFromCart } =
    useShoppingCart()

  return (
    <aside
      className={`${
        isOpenCart ? 'flex' : 'hidden'
      } fixed right-0 top-[62px] z-10 h-full w-[360px] flex-col items-center overflow-scroll rounded-sm border-x-2 border-gray-400 bg-slate-100 p-4 pb-20`}
    >
      <div className='flex w-full items-center justify-between'>
        <h3 className='text-2xl'>Cart</h3>
        <button onClick={closeCart}>
          <XMarkIcon className='w-8' />
        </button>
      </div>

      {cart.length === 0 ? (
        <div className='mt-8'>
          <h4 className='text-lg'>No products in cart</h4>
        </div>
      ) : (
        <div>
          <div className='mt-4'>
            {cart.map((product) => {
              const { id, image, price, title, quantity } = product
              return (
                <article
                  key={id}
                  className='flex w-full items-start gap-4 border-b border-gray-500 py-4'
                >
                  <figure>
                    <img className='h-16 w-16' src={image} alt={title} />
                  </figure>
                  <h4>{title.slice(0, 16)}</h4>
                  <p className='font-semibold'>${price * quantity}</p>
                  <div className='flex gap-1'>
                    <h4>qty:</h4>
                    <p>{quantity}</p>
                  </div>
                  <button
                    onClick={() => {
                      removeFromCart(product)
                    }}
                  >
                    <XCircleIcon className='w-6 text-gray-500' />
                  </button>
                </article>
              )
            })}
          </div>

          <div className='mt-4 flex flex-col gap-2'>
            <div className='flex w-full items-center justify-end gap-2'>
              <h4 className='text-lg font-semibold'>SubTotal:</h4>
              <p>${totalPrice(cart)}</p>
            </div>
            <div className='flex w-full items-center justify-end gap-2'>
              <h4 className='text-lg font-semibold'>Quantity:</h4>
              <p>{count}</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  )
}
