import { type ChangeEvent, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useShopi } from '../hooks'

export const SignUp = () => {
  const {
    userValues,
    resetUserValues,
    signUpUser,
    updateSessionStatus,
    isInSession
  } = useShopi()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    signUpUser(name, value)
  }

  console.log(isInSession)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    resetUserValues()
    updateSessionStatus(true)
    console.log(userValues)
  }

  return (
    <section className='mt-8'>
      <h3 className='text-center text-2xl'>Create Account</h3>
      <form
        onSubmit={handleSubmit}
        className='m-auto mt-6 w-[460px] rounded-md bg-slate-300 px-8 py-12'
      >
        <label className='text-left text-xl' htmlFor='fullname'>
          Fullname
        </label>
        <input
          name='fullname'
          id='fullname'
          className='mb-3 mt-2 w-full rounded-md px-3 py-2 text-lg'
          type='text'
          value={userValues.fullname}
          onChange={handleChange}
        />
        <label className='text-left text-xl' htmlFor='email'>
          Email
        </label>
        <input
          name='email'
          id='email'
          className='mb-3 mt-2 w-full rounded-md px-3 py-2 text-lg'
          type='email'
          value={userValues.email}
          onChange={handleChange}
        />
        <label className='text-xl' htmlFor='password'>
          Password
        </label>
        <input
          name='password'
          id='password'
          className='mb-3 mt-2 w-full rounded-md px-3 py-2 text-lg'
          type='password'
          value={userValues.password}
          onChange={handleChange}
        />
        <label className='text-xl' htmlFor='repeat-password'>
          Repeat Password
        </label>
        <input
          name='confirmPassword'
          id='repeat-password'
          className='mb-3 mt-2 w-full rounded-md px-3 py-2 text-lg'
          type='password'
          value={userValues.confirmPassword}
          onChange={handleChange}
        />
        <button className='mt-6 w-full rounded-md bg-blue-800 py-4 text-lg font-semibold text-gray-100 hover:bg-blue-950 hover:transition-colors'>
          Sign Up
        </button>
        <div className='mt-6 flex gap-2'>
          <h5 className='text-lg'>Already have an account?</h5>
          <Link className='text-lg font-semibold text-blue-800' to='/sign-in'>
            Sign in
          </Link>
        </div>
      </form>
    </section>
  )
}
