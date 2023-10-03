import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
    <footer className='absolute bottom-0 h-80 w-full border-t-2 border-gray-400 bg-slate-100 p-10 sm:h-40'>
      <ul className='mb-8 flex flex-col items-center justify-center gap-6 text-lg sm:flex-row sm:gap-12'>
        <li>
          <Link
            onClick={() => {
              window.scrollTo(0, 0)
            }}
            to='/'
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              window.scrollTo(0, 0)
            }}
            to='/about'
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              window.scrollTo(0, 0)
            }}
            to='/faq'
          >
            FAQ
          </Link>
        </li>
      </ul>
      <p className='text-center text-lg font-semibold'>
        Copyright &copy; {new Date().getFullYear()} All Rights Reserved by Shopi
      </p>
    </footer>
  )
}
