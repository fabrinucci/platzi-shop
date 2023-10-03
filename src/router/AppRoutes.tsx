import { useRoutes } from 'react-router-dom'
import {
  Home,
  MyAccount,
  MyOrder,
  MyOrders,
  NotFound,
  SignIn,
  SignUp
} from '../pages'
import { AboutUs, FAQ, Protected } from '../components'

export const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/category/:category', element: <Home /> },
    { path: '/my-orders', element: <MyOrders /> },
    {
      path: '/my-orders/:id',
      element: (
        <Protected type='order'>
          <MyOrder />
        </Protected>
      )
    },
    {
      path: '/my-account',
      element: (
        <Protected type='user'>
          <MyAccount />
        </Protected>
      )
    },
    {
      path: '/sign-in',
      element: (
        <Protected type='no-user'>
          <SignIn />
        </Protected>
      )
    },
    {
      path: '/sign-up',
      element: (
        <Protected type='no-user'>
          <SignUp />
        </Protected>
      )
    },

    { path: '/about', element: <AboutUs /> },
    { path: '/faq', element: <FAQ /> },
    { path: '/*', element: <NotFound /> }
  ])
  return routes
}
