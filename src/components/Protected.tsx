import { type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useShopi } from '../hooks'

interface ProtectedProps {
  children: ReactNode
}

export const Protected = ({ children }: ProtectedProps) => {
  const { isInSession } = useShopi()

  if (!isInSession) {
    return <Navigate to='/' replace />
  }
  return children
}
