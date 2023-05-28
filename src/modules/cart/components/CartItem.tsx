import { FC } from 'react'

import { Button } from 'common'
import { IProduct } from 'types'

interface CartItemProps {
  product: IProduct
}

export const CartItem: FC<CartItemProps> = ({ product }) => {
  const { id, title, description, price, image } = product
  return (
    <div className="flex justify-between shadow-md p-4">
      <div className="flex items-center gap-x-3">
        <img src={image} alt={title} className="w-40 h-40 object-cover rounded-xl" />
        <div className="flex flex-col gap-y-2">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
          <p className="text-lg font-bold text-blue-500">${price}</p>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        <Button className="py-2 px-3">-</Button>
        <span>0</span>
        <Button className="py-2 px-3">+</Button>
      </div>
    </div>
  )
}
