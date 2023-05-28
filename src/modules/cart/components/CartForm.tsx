import { Button, Input } from 'common'

export const CartForm = () => {
  return (
    <form className="flex flex-col gap-y-3 shadow-md p-3">
      <Input placeholder="Name" />
      <Input placeholder="Surname" />
      <Input placeholder="Address" />
      <Input placeholder="Phone" />
      <Button>Order</Button>
    </form>
  )
}
