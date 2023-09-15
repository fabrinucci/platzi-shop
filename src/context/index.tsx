import { createContext, useState, type ReactNode } from 'react'
import {
  type User,
  type ProductCart,
  type Product,
  type Order,
  type Categories,
  type UserSignIn
} from '../../types'
import {
  useAccount,
  useCart,
  useDetails,
  useOrders,
  useProducts
} from '../hooks'

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
  isInSession: boolean
  userValues: User
  signIn: (userValues: UserSignIn) => void
  signUp: (userValues: User) => void
  logOut: () => void
  users: User[]
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
  const accountContext = useAccount()

  return (
    <ShopiContext.Provider
      value={{
        ...cartContext,
        ...ordersContext,
        ...detailsContext,
        ...productsContext,
        ...accountContext,
        currentPathname,
        updatePathname
      }}
    >
      {children}
    </ShopiContext.Provider>
  )
}
