import { useState } from 'react'
import { type Order } from '../../types'

export const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>([])

  const addOrder = (orderToAdd: Order) => {
    setOrders([...orders, orderToAdd])
  }

  const selectedOrder = (orderId: string) => {
    if (orderId === 'last') {
      return orders.find((_, index) => index === orders.length - 1)
    }
    return orders.find((order) => order?.id === orderId)
  }

  return {
    orders,
    addOrder,
    selectedOrder
  }
}
