import { type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useShopi } from '../hooks'

interface ProtectedProps {
  children: ReactNode
  type: 'user' | 'no-user' | 'order'
}

export const Protected = ({ children, type }: ProtectedProps) => {
  const { isInSession, orders } = useShopi()

  if (!isInSession && type === 'user') return <Navigate to='/' replace />
  if (isInSession && type === 'no-user') return <Navigate to='/' replace />
  if (orders.length === 0 && type === 'order') {
    return <Navigate to='/' replace />
  }

  return children
}
