import { type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return <div className='mt-20 flex flex-col px-6'>{children}</div>
}
