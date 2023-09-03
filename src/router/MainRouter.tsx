import { BrowserRouter } from 'react-router-dom'
import { Cart, Layout, Navbar, ProductDetail } from '../components'
import { AppRoutes } from './AppRoutes'

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Layout>
        <AppRoutes />
      </Layout>
      <Cart />
      <ProductDetail />
    </BrowserRouter>
  )
}
