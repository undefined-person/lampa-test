import { create } from 'zustand'

import { IProduct, ICartItem } from 'types'

interface ICart {
  cartItems: ICartItem[]
  totalQuantity: number
  totalPrice: number
  addToCart: (product: IProduct) => void
  increaseQuantity: (id: string) => void
  decreaseQuantity: (id: string) => void
}

interface IProductsStore {
  products: IProduct[]
  cart: ICart
  setProducts: (products: IProduct[]) => void
}

export const useProductsStore = create<IProductsStore>(set => ({
  products: [],
  cart: {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
    addToCart: (product: IProduct) => {
      set(state => {
        const newCartItems = [...state.cart.cartItems]
        const existingCartItemIndex = newCartItems.findIndex(item => item.product.id === product.id)

        if (existingCartItemIndex >= 0) {
          newCartItems[existingCartItemIndex].quantity++
        } else {
          newCartItems.push({ product, quantity: 1 })
        }

        return {
          cart: {
            ...state.cart,
            cartItems: newCartItems,
            totalQuantity: state.cart.totalQuantity + 1,
            totalPrice: state.cart.totalPrice + product.price,
          },
        }
      })
    },
    increaseQuantity: (id: string) => {
      set(state => {
        const newCartItems = [...state.cart.cartItems]
        const existingCartItemIndex = newCartItems.findIndex(item => item.product.id === id)

        if (existingCartItemIndex >= 0) {
          newCartItems[existingCartItemIndex].quantity++
        }

        const totalPrice = newCartItems.reduce((total, item) => total + item.quantity * item.product.price, 0)

        return {
          cart: {
            ...state.cart,
            cartItems: newCartItems,
            totalQuantity: state.cart.totalQuantity + 1,
            totalPrice,
          },
        }
      })
    },
    decreaseQuantity: (id: string) => {
      set(state => {
        const newCartItems = [...state.cart.cartItems]
        const existingCartItemIndex = newCartItems.findIndex(item => item.product.id === id)

        if (existingCartItemIndex >= 0) {
          newCartItems[existingCartItemIndex].quantity--

          if (newCartItems[existingCartItemIndex].quantity <= 0) {
            newCartItems.splice(existingCartItemIndex, 1)
          }

          const totalPrice = newCartItems.reduce((total, item) => total + item.quantity * item.product.price, 0)

          return {
            cart: {
              ...state.cart,
              cartItems: newCartItems,
              totalQuantity: state.cart.totalQuantity - 1,
              totalPrice: totalPrice,
            },
          }
        }

        return state
      })
    },
  },
  setProducts: (products: IProduct[]) => {
    set({ products })
  },
}))
