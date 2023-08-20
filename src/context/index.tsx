import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction
} from 'react'

interface ContextProps {
  children: ReactNode
}

interface valueProps {
  count: number
  setCount: Dispatch<SetStateAction<number>>
}

export const ShoppingCartContext = createContext<valueProps | null>(null)

export const ShoppingCartProvider = ({ children }: ContextProps) => {
  const [count, setCount] = useState<number>(0)

  return (
    <ShoppingCartContext.Provider value={{ count, setCount }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
