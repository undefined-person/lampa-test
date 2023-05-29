import { CartItem } from './components/CartItem'
import { CartForm } from './components/CartForm'
import { useProductsStore } from 'store'

export const Cart = () => {
  const cart = useProductsStore(state => state.cart)
  const totalPrice = useProductsStore(state => state.cart.totalPrice)
  return (
    <section className="flex flex-col gap-y-4 py-8">
      <div className="flex gap-x-2 items-center text-xl">
        <h4 className="">Total:</h4>
        <span className="text-blue-500 font-bold">{totalPrice}$</span>
      </div>
      <div className="grid grid-cols-[2fr_1fr] gap-x-8 items-start">
        <div className="flex flex-col gap-y-3 ">
          {cart.cartItems.map(product => {
            return <CartItem key={product.product.id} cartItem={product} />
          })}
        </div>
        <CartForm />
      </div>
    </section>
  )
}
