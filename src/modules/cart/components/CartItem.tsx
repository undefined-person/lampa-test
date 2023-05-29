import { FC } from 'react'

import { Button } from 'common'
import { ICartItem } from 'types'
import { useProductsStore } from 'store'

interface CartItemProps {
  cartItem: ICartItem
}

export const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { id, title, description, price, image } = cartItem.product
  const { increaseQuantity, decreaseQuantity } = useProductsStore(state => state.cart)
  const { quantity } = cartItem

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
        <Button className="py-2 px-3" onClick={() => decreaseQuantity(id)}>
          -
        </Button>
        <span>{quantity}</span>
        <Button className="py-2 px-3" onClick={() => increaseQuantity(id)}>
          +
        </Button>
      </div>
    </div>
  )
}
