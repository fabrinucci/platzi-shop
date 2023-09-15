import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useShopi } from '../hooks'
import { type UserSignIn } from '../../types'

export const SignIn = () => {
  const [msg, setMsg] = useState('')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setFocus
  } = useForm<UserSignIn>()

  useEffect(() => {
    setFocus('email')
  }, [setFocus])

  const navigate = useNavigate()
  const { signIn, users } = useShopi()

  const onSubmit = handleSubmit((data) => {
    const { email, password } = data
    const user = users.find((user) => user.email === email)
    if (!user || user?.password !== password) {
      setMsg('Email or password is wrong')
      return
    }
    signIn(data)
    reset()
    navigate('/my-account')
    setMsg('')
  })

  return (
    <section className='mt-8'>
      <h3 className='text-center text-2xl'>Sign In</h3>
      <form
        onSubmit={onSubmit}
        className='m-auto mt-6 w-[460px] rounded-md bg-slate-300 px-8 py-12'
      >
        {
          <span className='mb-3 block text-center text-lg text-red-600'>
            {msg}
          </span>
        }
        <label className='text-left text-xl' htmlFor='email'>
          Email
        </label>
        <input
          {...register('email', {
            required: {
              value: true,
              message: 'Email is required'
            },
            pattern: {
              // eslint-disable-next-line no-useless-escape
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: 'Email not valid'
            }
          })}
          id='email'
          className='mb-3 mt-2 w-full rounded-md px-3 py-2 text-lg'
          type='email'
        />
        {errors.email && (
          <span className='mb-3 block w-full text-sm text-red-600'>
            {errors.email.message as string}
          </span>
        )}
        <label className='text-xl' htmlFor='password'>
          Password
        </label>
        <input
          {...register('password', {
            required: {
              value: true,
              message: 'Password is required'
            },
            minLength: {
              value: 6,
              message: 'Password must contain at least 6 characters'
            },
            maxLength: {
              value: 20,
              message: 'Password must not contain more than 20 characters'
            }
          })}
          id='password'
          className='mb-3 mt-2 w-full rounded-md px-3 py-2 text-lg'
          type='password'
        />
        {errors.password && (
          <span className='mb-3 block w-full text-sm text-red-600'>
            {errors.password.message as string}
          </span>
        )}
        <button className='mt-6 w-full rounded-md bg-blue-800 py-4 text-lg font-semibold text-gray-100 hover:bg-blue-950 hover:transition-colors'>
          Log in
        </button>
        <div className='mt-6 flex gap-2'>
          <h5 className='text-lg'>{"Don't have an account?"}</h5>
          <Link className='text-lg font-semibold text-blue-800' to='/sign-up'>
            Sign up
          </Link>
        </div>
      </form>
    </section>
  )
}
