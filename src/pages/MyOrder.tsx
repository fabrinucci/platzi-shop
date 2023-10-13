import { Link, useParams } from 'react-router-dom'
import { OrderCard } from '../components'
import { useShopi } from '../hooks'
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'

export const MyOrder = () => {
  const { selectedOrder } = useShopi()

  const params = useParams()
  const orderId = params.id

  const order = selectedOrder(orderId!)

  return (
    <section className='relative m-auto mt-6 lg:mt-14'>
      <div className='mb-4'>
        <Link to='/my-orders'>
          <ArrowLeftCircleIcon className='absolute top-[5px] w-6' />
        </Link>
        <h3 className='text-center text-2xl'>My order</h3>
      </div>
      <div className='flex w-[260px] flex-col items-center justify-center sm:w-[360px]'>
        {order?.products.map((product) => (
          <OrderCard key={product.id} product={product} type='Order' />
        ))}
      </div>

      <div className='mt-6 flex items-center justify-center gap-6'>
        <div className='flex items-center justify-center gap-2'>
          <h4 className='text-xl font-semibold'>SubTotal:</h4>
          <p className='text-lg'>${order?.totalPrice}</p>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <h4 className='text-xl font-semibold'>Quantity:</h4>
          <p className='text-lg'>{order?.totalProducts}</p>
        </div>
      </div>
    </section>
  )
}
