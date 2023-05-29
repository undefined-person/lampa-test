import { useRoutes } from 'react-router-dom'

import { Products, Cart } from 'modules'

export const Router = () => {
  let routes = useRoutes([
    {
      path: '/products',
      element: <Products />,
    },
    {
      path: '/cart',
      element: <Cart />,
    },
  ])

  return routes
}
