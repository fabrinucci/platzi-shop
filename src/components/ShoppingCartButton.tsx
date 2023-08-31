import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useShopi } from '../hooks/useShopi'

export const ShoppingCartButton = () => {
  const { count, isOpenCart, isOpenDetail, closeDetail, openCart, closeCart } =
    useShopi()

  const openCartAndCloseDetail = () => {
    if (isOpenDetail) {
      closeDetail()
    }
    openCart()
  }

  return (
    <button
      onClick={isOpenCart ? closeCart : openCartAndCloseDetail}
      className='relative cursor-pointer'
    >
      <ShoppingCartIcon className='h-6' />
      <div className='absolute -right-[0.37rem] top-4 flex h-[0.9rem] w-[0.9rem] items-center justify-center rounded-full bg-blue-600'>
        <span className='text-[0.7rem] font-semibold text-white'>{count}</span>
      </div>
    </button>
  )
}
