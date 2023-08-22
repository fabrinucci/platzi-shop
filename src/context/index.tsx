import { createContext, useState, type ReactNode } from 'react'

interface ContextProps {
  children: ReactNode
}

interface valueProps {
  count: number
  isOpenCart: boolean
  increaseCount: (count: number) => void
  openCart: () => void
  closeCart: () => void
}

export const ShoppingCartContext = createContext<valueProps | null>(null)

export const ShoppingCartProvider = ({ children }: ContextProps) => {
  const [count, setCount] = useState<number>(0)
  const [isOpenCart, setIsOpenCart] = useState<boolean>(false)

  const increaseCount = (count: number) => {
    setCount(count + 1)
  }

  const openCart = () => {
    setIsOpenCart(true)
  }
  const closeCart = () => {
    setIsOpenCart(false)
  }

  return (
    <ShoppingCartContext.Provider
      value={{ count, increaseCount, isOpenCart, openCart, closeCart }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
