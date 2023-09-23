import { type ReactNode } from 'react'

interface Props {
  children: ReactNode
  title?: string
}

export const Layout = ({ children, title = 'Shopi Ecco' }: Props) => {
  return (
    <main className='flex flex-col bg-slate-100 py-24 sm:px-6'>
      <h1 className='text-center text-4xl font-semibold'>{title}</h1>
      {children}
    </main>
  )
}
