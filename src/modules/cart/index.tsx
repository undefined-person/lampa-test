import { products } from 'data.json'
import { CartItem } from './components/CartItem'
import { CartForm } from './components/CartForm'

export const Cart = () => {
  return (
    <section className="grid py-8 grid-cols-[2fr_1fr] gap-x-8 items-start">
      <div className="flex flex-col gap-y-3 ">
        {products.map(product => {
          return <CartItem key={product.id} product={product} />
        })}
      </div>
      <CartForm />
    </section>
  )
}
