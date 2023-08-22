import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useShoppingCart } from '../hooks/useShoppingCart'

export const ShoppingCartButton = () => {
  const { count, isOpenCart, openCart, closeCart } = useShoppingCart()

  return (
    <button
      onClick={isOpenCart ? closeCart : openCart}
      className='relative cursor-pointer'
    >
      <ShoppingCartIcon className='h-6' />
      <div className='absolute -right-[0.37rem] top-4 flex h-[0.9rem] w-[0.9rem] items-center justify-center rounded-full bg-blue-600'>
        <span className='text-[0.7rem] font-semibold text-white'>{count}</span>
      </div>
    </button>
  )
}
