import { useShoppingCart } from '../hooks/useShoppingCart'

export const ShoppingCart = () => {
  const { count } = useShoppingCart()

  return (
    <div>
      <div className='relative cursor-pointer'>
        <img className='w-6' src='/shopping-cart.png' alt='' />
        <div className='absolute -right-[0.37rem] top-4 flex h-[0.9rem] w-[0.9rem] items-center justify-center rounded-full bg-blue-600'>
          <span className='text-[0.7rem] font-semibold text-white'>
            {count}
          </span>
        </div>
      </div>
    </div>
  )
}
