import { useProductsStore } from 'store'
import { useEffect } from 'react'

import { Product } from './components/Product'

export const Products = () => {
  const { setProducts } = useProductsStore(store => store)
  const { products } = useProductsStore(store => store)

  useEffect(() => {
    setProducts()
  }, [])

  return <section className="grid grid-cols-3 gap-5 py-8">{products.length > 0 ? products.map(product => <Product key={product.id} product={product} />) : null}</section>
}
