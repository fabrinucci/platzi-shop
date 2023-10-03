import { BrowserRouter } from 'react-router-dom'
import { Cart, Layout, ProductDetail } from '../components'
import { AppRoutes } from './AppRoutes'

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
      <Cart />
      <ProductDetail />
    </BrowserRouter>
  )
}
