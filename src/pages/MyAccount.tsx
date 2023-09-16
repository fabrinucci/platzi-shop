import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { useShopi } from '../hooks'
import { type UserSignIn } from '../../types'

export const MyAccount = () => {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const { register } = useForm<UserSignIn>()
  const { userValues, logOut, deleteAccount, users } = useShopi()
  console.log(users)

  const handleDeleteAccount = () => {
    deleteAccount(userValues)
    navigate('/sign-in')
  }

  const handleLogOut = () => {
    logOut()
    navigate('/sign-in')
  }

  return (
    <section className='mt-8'>
      <h3 className='text-center text-2xl'>Welcome {userValues.fullname}</h3>
      <form className='m-auto mt-6 w-[460px] rounded-md bg-slate-300 px-8 py-12'>
        <div className='flex items-center justify-center gap-2'>
          <label className='text-left text-xl'>Email:</label>
          <input
            {...register('email', {
              value: userValues.email
            })}
            className='w-full rounded-md px-3 py-2 text-lg'
            disabled
            type='email'
          />
        </div>
        <div className='mt-4 flex items-center justify-center gap-2'>
          <label className='text-xl'>Password:</label>
          <div className='relative w-full'>
            <input
              {...register('password', {
                value: userValues.password
              })}
              className='w-full rounded-md px-3 py-2 text-lg'
              disabled
              type={showPassword ? 'text' : 'password'}
            />
            <button
              className='absolute right-3 top-3 w-6'
              onClick={(e) => {
                e.preventDefault()
                setShowPassword(!showPassword)
              }}
            >
              {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
            </button>
          </div>
        </div>
        <button
          onClick={handleLogOut}
          className='mt-6 w-full rounded-md border-2 border-blue-800 py-4 text-lg font-semibold text-blue-800 hover:border-transparent hover:bg-blue-950 hover:text-white hover:transition-colors'
        >
          Log out
        </button>
        <span className='mt-6 block bg-red-300 p-4 font-semibold text-red-800'>
          Warning: Danger zone
        </span>
        <button
          onClick={handleDeleteAccount}
          className='mt-3 w-full rounded-md border-2 border-red-600 py-4 text-lg font-semibold text-red-600 hover:border-transparent hover:bg-red-700 hover:text-white hover:transition-colors'
        >
          Delete Account
        </button>
      </form>
    </section>
  )
}
