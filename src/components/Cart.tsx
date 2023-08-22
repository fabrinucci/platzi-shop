import { XMarkIcon } from '@heroicons/react/20/solid'
import { ProductDetail } from '.'
import { useShoppingCart } from '../hooks'

export const Cart = () => {
  const { isOpenCart, closeCart } = useShoppingCart()

  return (
    <aside
      className={`${
        isOpenCart ? 'flex' : 'hidden'
      } fixed right-0 top-[62px] z-10 h-full w-[360px] flex-col items-center overflow-scroll rounded-sm border-x-2 border-gray-400 bg-slate-100 px-8 pb-20 pt-4`}
    >
      <div className='flex w-full items-center justify-between'>
        <h3 className='text-2xl'>Cart</h3>
        <button onClick={closeCart}>
          <XMarkIcon className='w-8' />
        </button>
      </div>
      <ProductDetail />
      <div className='mt-4 flex w-full items-center justify-end gap-2'>
        <h4 className='text-lg font-semibold'>SubTotal:</h4>
        <p>$58</p>
      </div>
    </aside>
  )
}
