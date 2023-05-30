import * as yup from 'yup'
import { useForm } from 'react-hook-form'

import { Button, Input } from 'common'
import { useValidation } from 'hooks'
import { orderProducts } from 'api/products'
import { useProductsStore } from 'store'

const validationSchema = yup.object({
  name: yup.string().required('Required'),
  surname: yup.string().required('Required'),
  address: yup.string().required('Required'),
  phone: yup.string().required('Required'),
})

const ErrorMessage = ({ message }: { message: string }) => {
  return <span className="text-red-500 text-sm">{message}</span>
}

export const CartForm = () => {
  const { cartItems } = useProductsStore(store => store.cart)
  const resolver = useValidation(validationSchema)
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({ resolver })

  const onSubmit = (data: { name: string; surname: string; address: string; phone: string }) => {
    orderProducts({ ...data, products: cartItems })
    reset()
  }

  return (
    <form className="flex flex-col gap-y-3 shadow-md p-3" onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Name" {...register('name')} />
      {errors.name && <ErrorMessage message="Required" />}
      <Input placeholder="Surname" {...register('surname')} />
      {errors.surname && <ErrorMessage message="Required" />}
      <Input placeholder="Address" {...register('address')} />
      {errors.address && <ErrorMessage message="Required" />}
      <Input placeholder="Phone" {...register('phone')} />
      {errors.phone && <ErrorMessage message="Required" />}
      <Button disabled={cartItems.length === 0}>Order</Button>
    </form>
  )
}
