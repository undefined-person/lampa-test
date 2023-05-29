import { ReactComponent as Cart } from 'assets/icons/cart.svg'
import { Link } from 'react-router-dom'
import { routes } from 'routes/routes'

export const Header = () => {
  return (
    <header className="bg-blue-900 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={routes.products} className="text-white font-medium text-2xl">
          Products
        </Link>
        <Link to={routes.cart} className="relative">
          <Cart className="w-6 h-6 fill-white" />
          <span className="bg-blue-500 rounded-full h-4 flex items-center justify-center text-white w-4 text-xs absolute -top-1 -right-3">5</span>
        </Link>
      </div>
    </header>
  )
}
