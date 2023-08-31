import { createContext, type ReactNode } from 'react'
import { useCart, useDetails, useOrders } from '../hooks'
import { type ProductCart, type Product, type Order } from '../../types'

interface ContextProps {
  children: ReactNode
}

export interface ShopiProps {
  count: number
  isOpenCart: boolean
  openCart: () => void
  closeCart: () => void
  isOpenDetail: boolean
  openDetail: () => void
  closeDetail: () => void
  productToShow: Product | {}
  updateProductToShow: (product: Product) => void
  cart: ProductCart[]
  addToCart: (product: Product) => void
  removeFromCart: (product: ProductCart) => void
  removeAllFromCart: () => void
  quantity: number
  orders: Order[]
  addOrder: (orderToAdd: Order) => void
  selectedOrder: (orderId: string) => Order | undefined
}

export const ShopiContext = createContext<ShopiProps | null>(null)

export const ShopiProvider = ({ children }: ContextProps) => {
  const cartContext = useCart()
  const ordersContext = useOrders()
  const detailsContext = useDetails()

  return (
    <ShopiContext.Provider
      value={{
        ...cartContext,
        ...ordersContext,
        ...detailsContext
      }}
    >
      {children}
    </ShopiContext.Provider>
  )
}
