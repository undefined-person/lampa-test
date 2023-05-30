import { Link } from 'react-router-dom'

import { routes } from 'routes/routes'
import { useProductsStore } from 'store'

import { ReactComponent as Cart } from 'assets/icons/cart.svg'

export const Header = () => {
  const totalPrice = useProductsStore(state => state.cart.totalPrice)

  return (
    <header className="bg-blue-900 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={routes.products} className="text-white font-medium text-2xl">
          Products
        </Link>
        <Link to={routes.cart} className="relative flex items-center justify-center gap-x-1">
          <Cart className="w-6 h-6 fill-white" />
          {totalPrice > 0 ? <span className=" rounded-lg p-1 text-white text-xs ">{totalPrice}$</span> : null}
        </Link>
      </div>
    </header>
  )
}
