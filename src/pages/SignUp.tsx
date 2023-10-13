import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useShopi } from '../hooks'
import { type User } from '../../types'
import { useEffect } from 'react'

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
    setFocus
  } = useForm<User>()

  const navigate = useNavigate()
  const { signUp, users } = useShopi()

  useEffect(() => {
    setFocus('fullname')
  }, [setFocus])

  const onSubmit = handleSubmit((data) => {
    signUp(data)
    reset()
    navigate('/my-account')
  })

  return (
    <section className='mt-6 lg:mt-14'>
      <h3 className='text-center text-2xl'>Create Account</h3>
      <form
        onSubmit={onSubmit}
        className='m-auto mt-6 w-[90%] rounded-md bg-slate-300 px-4 py-6 sm:w-[460px] sm:px-8 sm:py-12'
      >
        <label className='text-left text-xl' htmlFor='fullname'>
          Fullname
        </label>
        <input
          {...register('fullname', {
            required: {
              value: true,
              message: 'Fullname is required'
            },
            minLength: {
              value: 3,
              message: 'Fullname must contain at least 3 characters'
            },
            maxLength: {
              value: 30,
              message: 'Fullname must not contain more than 30 characters'
            }
          })}
          id='fullname'
          className='mb-3 mt-2 w-full rounded-md px-3 py-2 text-lg'
          type='text'
        />
        {errors.fullname && (
          <span className='mb-3 block w-full text-sm text-red-600'>
            {errors.fullname.message as string}
          </span>
        )}
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
            },
            validate: (value) => {
              const existsUser = users.some((user) => user.email === value)
              if (!existsUser) return true
              return 'Email is already taken'
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
        <label className='text-xl' htmlFor='confirmPassword'>
          Repeat Password
        </label>
        <input
          {...register('confirmPassword', {
            required: {
              value: true,
              message: 'Password is required'
            },
            validate: (value: string) =>
              value === watch('password') || 'Passwords must match'
          })}
          id='confirmPassword'
          className='mb-3 mt-2 w-full rounded-md px-3 py-2 text-lg'
          type='password'
        />
        {errors.confirmPassword && (
          <span className='mb-3 block w-full text-sm text-red-600'>
            {errors.confirmPassword.message as string}
          </span>
        )}
        <button className='mt-6 w-full rounded-md bg-blue-800 py-4 text-lg font-semibold text-gray-100 hover:bg-blue-950 hover:transition-colors'>
          Sign Up
        </button>
        <div className='mt-6 flex flex-col gap-2 min-[350px]:flex-row'>
          <h5 className='text-lg'>Already have an account?</h5>
          <Link className='text-lg font-semibold text-blue-800' to='/sign-in'>
            Sign in
          </Link>
        </div>
      </form>
    </section>
  )
}
