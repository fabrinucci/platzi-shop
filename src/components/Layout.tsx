import { type ReactNode } from 'react'
import { Footer, Navbar } from './'

interface Props {
  children: ReactNode
  title?: string
}

export const Layout = ({ children, title = 'Shopi Ecco' }: Props) => {
  return (
    <div className='relative min-h-screen'>
      <Navbar />
      <main className='flex min-h-screen flex-col bg-slate-100 py-24 pb-96 sm:px-6 sm:pb-52'>
        <h1 className='text-center text-4xl font-semibold'>{title}</h1>
        {children}
      </main>
      <Footer />
    </div>
  )
}
