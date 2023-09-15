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
        <Protected>
          <MyAccount />
        </Protected>
      )
    },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/sign-up', element: <SignUp /> },
    { path: '/*', element: <NotFound /> }
  ])
  return routes
}
