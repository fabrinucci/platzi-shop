import { ShoppingCartProvider } from './context'
import { MainRouter } from './router/MainRouter'

export const App = () => {
  return (
    <ShoppingCartProvider>
      <MainRouter />
    </ShoppingCartProvider>
  )
}
