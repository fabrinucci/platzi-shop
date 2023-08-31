import { useContext } from 'react'
import { ShopiContext } from '../context'

export const useShopi = () => {
  const shopiContext = useContext(ShopiContext)

  if (!shopiContext) {
    throw new Error(
      'useShoppingCart has to be used within <shopiContext.Provider>'
    )
  }

  return shopiContext
}
