import { type FormEvent } from 'react'
import { Link } from 'react-router-dom'

export const SignIn = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <section className='mt-8'>
      <h3 className='text-center text-2xl'>Sign In</h3>
      <form
        onSubmit={handleSubmit}
        className='m-auto mt-6 w-[460px] rounded-md bg-slate-300 px-8 py-12'
      >
        <label className='text-left text-xl' htmlFor='email'>
          Email
        </label>
        <input
          id='email'
          className='mb-3 mt-2 w-full rounded-md px-3 py-2 text-lg'
          type='email'
        />
        <label className='text-xl' htmlFor='password'>
          Password
        </label>
        <input
          id='password'
          className='mb-3 mt-2 w-full rounded-md px-3 py-2 text-lg'
          type='password'
        />
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
