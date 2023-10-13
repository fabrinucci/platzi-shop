import { type ReactNode } from 'react'
import { Footer, Navbar } from './'

interface Props {
  children: ReactNode
  title?: string
}

export const Layout = ({ children }: Props) => {
  return (
    <div className='relative min-h-screen'>
      <Navbar />
      <main className='flex min-h-screen flex-col bg-slate-100 py-24 pb-96 sm:pb-52'>
        {children}
      </main>
      <Footer />
    </div>
  )
}
