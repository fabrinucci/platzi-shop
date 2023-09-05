import { createContext, useState, type ReactNode } from 'react'
import { useCart, useDetails, useOrders, useProducts } from '../hooks'
import {
  type ProductCart,
  type Product,
  type Order,
  type Categories
} from '../../types'

interface ContextProps {
  children: ReactNode
}

export interface ShopiProps {
  count: number
  isOpenCart: boolean
  isOpenDetail: boolean
  productToShow: Product | {}
  cart: ProductCart[]
  quantity: number
  orders: Order[]
  openCart: () => void
  closeCart: () => void
  openDetail: () => void
  closeDetail: () => void
  updateProductToShow: (product: Product) => void
  addToCart: (product: Product) => void
  removeFromCart: (product: ProductCart) => void
  removeAllFromCart: () => void
  addOrder: (orderToAdd: Order) => void
  selectedOrder: (orderId: string) => Order | undefined
  products: Product[]
  loading: boolean
  filteredProducts: Product[]
  searchByTitle: string
  updateSearchTitle: (value: React.SetStateAction<string>) => void
  selectCategory: (category: Categories | 'all') => void
  clearSearchTitle: () => void
  currentPathname: string
  updatePathname: (pathname: string) => void
  category: Categories | 'all'
}

export const ShopiContext = createContext<ShopiProps | null>(null)

export const ShopiProvider = ({ children }: ContextProps) => {
  const [currentPathname, setCurrentPathname] = useState(location.pathname)
  const updatePathname = (pathname: string) => {
    setCurrentPathname(pathname)
  }

  const cartContext = useCart()
  const ordersContext = useOrders()
  const detailsContext = useDetails()
  const productsContext = useProducts()

  return (
    <ShopiContext.Provider
      value={{
        ...cartContext,
        ...ordersContext,
        ...detailsContext,
        ...productsContext,
        currentPathname,
        updatePathname
      }}
    >
      {children}
    </ShopiContext.Provider>
  )
}
