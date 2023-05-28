import { products } from 'data.json'

import { Product } from './components/Product'

export const Products = () => {
  return (
    <section className="grid grid-cols-3 gap-5 py-8">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  )
}
