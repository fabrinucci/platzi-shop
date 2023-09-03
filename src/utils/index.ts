import { useEffect } from 'react'
import { type ProductCart } from '../../types'
import { type Location, useLocation } from 'react-router-dom'

export const totalPrice = (products: ProductCart[]) => {
  const price = products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  return Math.round(price * 100) / 100
}

export const totalQuantity = (products: ProductCart[]) => {
  return products.reduce((acc, item) => acc + item.quantity, 0)
}

export const getDate = () => {
  const fullDate = new Date()
  const day = fullDate.getDate()
  const month = fullDate.getMonth() + 1
  const year = fullDate.getFullYear()

  const date = `${month}/${day}/${year}`
  return date
}

export const useLocationEffect = (callback: (location: Location) => any) => {
  const location = useLocation()

  useEffect(() => {
    callback(location)
  }, [location, callback])
}
