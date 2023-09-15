import { useState } from 'react'
import { type UserSignIn, type User } from '../../types'
import { userInitialValues } from '../utils'

export const useAccount = () => {
  const [users, setUsers] = useState<User[]>([])
  const [isInSession, setIsInSession] = useState<boolean>(false)
  const [userValues, setUserValues] = useState<User>(userInitialValues)

  const signUp = (userValues: User) => {
    setUsers([...users, userValues])
    setUserValues(userValues)
    setIsInSession(true)
  }

  const signIn = (userValues: UserSignIn) => {
    const userBy = users.find((user) => user.email === userValues.email)
    if (userBy?.password === userValues.password) {
      setUserValues({
        ...userBy
      })
      setIsInSession(true)
    }
  }

  const logOut = () => {
    setIsInSession(false)
    setUserValues(userInitialValues)
  }

  return {
    users,
    userValues,
    isInSession,
    signUp,
    signIn,
    logOut
  }
}
