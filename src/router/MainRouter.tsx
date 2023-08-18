import { BrowserRouter, useRoutes } from 'react-router-dom'
import {
  Clothes,
  Electronics,
  Furnitures,
  Home,
  MyAccount,
  MyOrder,
  MyOrders,
  NotFound,
  Others,
  SignIn,
  Toys
} from '../pages'
import { Layout, Navbar } from '../components'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/clothes', element: <Clothes /> },
    { path: '/electronics', element: <Electronics /> },
    { path: '/furnitures', element: <Furnitures /> },
    { path: '/toys', element: <Toys /> },
    { path: '/others', element: <Others /> },

    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
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
    </BrowserRouter>
  )
}
