import { v4 as uuid } from 'uuid'
import { type Order } from '../../types'
import { useShoppingCart } from '../hooks'
import { getDate, totalPrice, totalQuantity } from '../utils/index'

interface Props {
  className?: string
}
export const Checkout = ({ className }: Props) => {
  const { cart, addOrder, removeAllFromCart, closeCart } = useShoppingCart()

  const handleOrder = () => {
    const date = getDate()

    const orderToAdd: Order = {
      id: uuid(),
      date,
      products: cart,
      totalProducts: totalQuantity(cart),
      totalPrice: totalPrice(cart)
    }
    addOrder(orderToAdd)
    removeAllFromCart()
    closeCart()
  }
  return (
    <button
      onClick={handleOrder}
      className={`${
        className || ''
      } w-full rounded-md bg-blue-800 py-3 font-semibold text-gray-100 hover:bg-blue-950 hover:transition-colors`}
    >
      Checkout
    </button>
  )
}
