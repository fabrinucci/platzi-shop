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
import { Protected } from '../components/Protected'

export const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/category/:category', element: <Home /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
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

    { path: '/*', element: <NotFound /> }
  ])
  return routes
}
