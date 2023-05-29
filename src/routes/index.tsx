import { useRoutes } from 'react-router-dom'

import { Products, Cart } from 'modules'
import { routes } from './routes'

export const Router = () => {
  let router = useRoutes([
    {
      path: routes.products,
      element: <Products />,
    },
    {
      path: routes.cart,
      element: <Cart />,
    },
  ])

  return router
}
