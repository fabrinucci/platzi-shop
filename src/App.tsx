import { ShopiProvider } from './context'
import { MainRouter } from './router/MainRouter'

export const App = () => {
  return (
    <ShopiProvider>
      <MainRouter />
    </ShopiProvider>
  )
}
