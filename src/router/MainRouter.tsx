import { BrowserRouter, useRoutes } from 'react-router-dom'
import {
  Home,
  MensClothes,
  WomensClothes,
  Electronics,
  Jewelery,
  MyAccount,
  MyOrder,
  MyOrders,
  NotFound,
  SignIn
} from '../pages'
import { Cart, Layout, Navbar, ProductDetail } from '../components'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/mens-clothes', element: <MensClothes /> },
    { path: '/womens-clothes', element: <WomensClothes /> },
    { path: '/electronics', element: <Electronics /> },
    { path: '/jewelery', element: <Jewelery /> },

    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> }
  ])
  return routes
}

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
