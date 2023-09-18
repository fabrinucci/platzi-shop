import { useState } from 'react'
import { type UserSignIn, type User } from '../../types'
import { userInitialValues } from '../utils'

export const useAccount = () => {
  const sessionLS = localStorage.getItem('session') === 'true'
  const userValuesLS = () => {
    const storedUserValues = localStorage.getItem('account')
    return storedUserValues
      ? (JSON.parse(storedUserValues) as User)
      : userInitialValues
  }

  const usersLS = () => {
    const storedUsers = localStorage.getItem('users')
    return storedUsers ? (JSON.parse(storedUsers) as User[]) : []
  }

  const [users, setUsers] = useState<User[]>(usersLS)
  const [isInSession, setIsInSession] = useState<boolean>(sessionLS)
  const [userValues, setUserValues] = useState<User>(userValuesLS)

  const signUp = (userValues: User) => {
    const updatedUser = [...users, userValues]
    setUsers(updatedUser)
    setUserValues(userValues)
    setIsInSession(true)

    localStorage.setItem('session', 'true')
    localStorage.setItem('account', JSON.stringify(userValues))
    localStorage.setItem('users', JSON.stringify(updatedUser))
  }

  const signIn = (userValues: UserSignIn) => {
    const userBy = users.find((user) => user.email === userValues.email)
    if (userBy?.password === userValues.password) {
      setUserValues(userBy)
      setIsInSession(true)

      localStorage.setItem('session', 'true')
      localStorage.setItem('account', JSON.stringify(userBy))
    }
  }

  const logOut = () => {
    setIsInSession(false)
    setUserValues(userInitialValues)
    localStorage.removeItem('session')
    localStorage.removeItem('account')
  }

  const deleteAccount = (userValues: User) => {
    const newUsers = users.filter((user) => user.email !== userValues.email)
    setUsers(newUsers)
    setIsInSession(false)
    setUserValues(userInitialValues)

    localStorage.removeItem('session')
    localStorage.removeItem('account')
    localStorage.setItem('users', JSON.stringify(newUsers))
  }

  return {
    users,
    userValues,
    isInSession,
    signUp,
    signIn,
    logOut,
    deleteAccount
  }
}
