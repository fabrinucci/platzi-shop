import { type ProductCart } from '../../types'

export const totalPrice = (products: ProductCart[]) => {
  return products.reduce((acc, item) => acc + item.price * item.quantity, 0)
}
