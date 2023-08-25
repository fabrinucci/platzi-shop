import { createContext, useState, type ReactNode } from 'react'
import { type ProductCart, type Product } from '../../types'

interface ContextProps {
  children: ReactNode
}

interface valueProps {
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
  quantity: number
}

export const ShoppingCartContext = createContext<valueProps | null>(null)

export const ShoppingCartProvider = ({ children }: ContextProps) => {
  const [count, setCount] = useState<number>(0)
  const [isOpenCart, setIsOpenCart] = useState<boolean>(false)
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false)

  const [productToShow, setProductToShow] = useState<Product | {}>({})
  const [cart, setCart] = useState<ProductCart[]>([])
  const [quantity, setQuantity] = useState<number>(0)

  const increaseCount = (operation: number) => {
    setCount(count + operation)
  }
  const decreaseCount = (operation: number) => {
    setCount(count - operation)
  }

  const openCart = () => {
    if (isOpenDetail) {
      setIsOpenDetail(false)
    }
    setIsOpenCart(true)
  }
  const closeCart = () => {
    setIsOpenCart(false)
  }

  const openDetail = () => {
    if (isOpenCart) {
      setIsOpenCart(false)
    }
    setIsOpenDetail(true)
  }
  const closeDetail = () => {
    setIsOpenDetail(false)
  }

  const updateProductToShow = (product: Product) => {
    setProductToShow(product)
  }

  const addToCart = (product: Product) => {
    const productInCart = cart.find((item) => item.id === product.id)
    if (productInCart) {
      setQuantity(productInCart.quantity++)
      increaseCount(1)
      return
    }

    const newProduct = {
      ...product,
      quantity: 1
    }
    setCart([...cart, newProduct])
    increaseCount(1)
  }

  const removeFromCart = (product: ProductCart) => {
    const newCart = cart.filter((item) => item.id !== product.id)
    setCart(newCart)
    decreaseCount(product.quantity)
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        isOpenCart,
        isOpenDetail,
        productToShow,
        cart,
        quantity,
        openCart,
        closeCart,
        openDetail,
        closeDetail,
        updateProductToShow,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
