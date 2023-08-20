import { useContext } from 'react'
import { ShoppingCartContext } from '../context'

export const useShoppingCart = () => {
  const shoppingCartContext = useContext(ShoppingCartContext)

  if (!shoppingCartContext) {
    throw new Error(
      'useShoppingCart has to be used within <ShoppingCartContext.Provider>'
    )
  }

  return shoppingCartContext
}
