export const MyAccount = () => {
  return (
    <section className='mt-8'>
      <h3 className='text-center text-2xl'>Welcome</h3>
      <form className='m-auto mt-6 w-[460px] rounded-md bg-slate-300 px-8 py-12'>
        <div className='flex items-center justify-center gap-2'>
          <label className='text-left text-xl'>Email:</label>
          <input
            className='w-full rounded-md px-3 py-2 text-lg'
            disabled
            type='email'
            id='email'
            value={'midf5e1f4fefeefmu@email.com'}
          />
          <button className='font-semibold text-blue-800'>Update email</button>
        </div>
        <div className='mt-4 flex items-center justify-center gap-2'>
          <label className='text-xl'>Password:</label>
          <input
            className='w-full rounded-md px-3 py-2 text-lg'
            disabled
            type='password'
            id='password'
            value='********'
          />
          <button className='font-semibold text-blue-800'>
            Change password
          </button>
        </div>
        <button className='mt-6 w-full rounded-md border-2 border-blue-800 py-4 text-lg font-semibold text-blue-800 hover:border-transparent hover:bg-blue-950 hover:text-white hover:transition-colors'>
          Log out
        </button>
      </form>
    </section>
  )
}
