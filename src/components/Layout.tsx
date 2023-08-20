import { type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return <div className='flex flex-col bg-slate-100 px-6 py-20'>{children}</div>
}
