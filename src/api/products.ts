import { db } from './firebase'

import { collection, getDocs, addDoc } from 'firebase/firestore'

export const fetchProducts = async () => {
  const productsCol = collection(db, 'products')
  const productSnapshot = await getDocs(productsCol)
  const products = productSnapshot.docs.map(doc => {
    return { id: doc.id, ...doc.data() }
  })

  return products
}

export const orderProducts = async (order: any) => {
  const dbRef = collection(db, 'orders')

  const newOrder = {
    ...order,
    status: 'pending',
    date: new Date(),
  }

  addDoc(dbRef, newOrder)
    .then(() => {
      console.log('Products ordered successfully')
    })
    .catch(error => {
      console.log(error)
    })
}
