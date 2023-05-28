import { FC } from 'react'

import { IProduct } from 'modules/types'
import { Button } from 'common'

interface ProductProps {
  product: IProduct
}

export const Product: FC<ProductProps> = ({ product }) => {
  const { title, description, price, image } = product
  return (
    <div className="shadow-xl rounded-lg overflow-hidden">
      <div>
        <img className="h-80 w-full object-cover" src={image} alt={title} />
        <div className="flex flex-col gap-y-2 p-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm line-clamp-1">{description}</p>
          <p className="text-blue-500 font-bold">{price}$</p>
          <Button className="mt-auto">Add to cart</Button>
        </div>
      </div>
    </div>
  )
}
