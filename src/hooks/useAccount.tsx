import { useState } from 'react'
import { type User } from '../../types'
import { userInitialValues } from '../utils'

export const useAccount = () => {
  const [isInSession, setIsInSession] = useState<boolean>(false)
  const [userValues, setUserValues] = useState<User>(userInitialValues)

  const updateSessionStatus = (value: boolean) => {
    setIsInSession(value)
  }

  const signUpUser = (name: string, value: string) => {
    setUserValues({
      ...userValues,
      [name]: value
    })
  }

  const resetUserValues = () => {
    setUserValues(userInitialValues)
  }

  return {
    isInSession,
    userValues,
    updateSessionStatus,
    signUpUser,
    resetUserValues
  }
}
