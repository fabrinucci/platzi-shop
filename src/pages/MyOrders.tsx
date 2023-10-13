import { Link } from 'react-router-dom'
import {
  ArrowRightCircleIcon,
  CalendarIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline'
import { useShopi } from '../hooks'

export const MyOrders = () => {
  const { orders } = useShopi()
  const noOrders = orders.length === 0

  return (
    <section className='relative m-auto mt-6 lg:mt-14'>
      <h3 className='text-center text-2xl'>My orders</h3>
      {noOrders ? (
        <h4 className='mt-5 text-center text-lg'>No orders added</h4>
      ) : (
        <div className='mt-4 flex flex-col items-center justify-center gap-3'>
          {orders.map((order) => (
            <div
              className='m-auto w-[300px] rounded-md border border-gray-900 px-6 py-4 sm:w-[360px]'
              key={order.id}
            >
              <div className='flex items-center justify-between'>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-2'>
                    <CalendarIcon className='w-5' />
                    <h4 className='text-lg'>{order.date}</h4>
                  </div>
                  <div className='flex items-center gap-2'>
                    <ShoppingBagIcon className='w-5' />
                    <h4 className='text-lg'>{order.totalProducts} articles</h4>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <h3 className='text-3xl font-semibold'>
                    ${order.totalPrice}
                  </h3>
                  <Link to={`/my-orders/${order.id}`}>
                    <ArrowRightCircleIcon className='w-6' />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
