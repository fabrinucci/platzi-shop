import { useNavigate } from 'react-router-dom'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

const images = [
  {
    name: 'Fearsun',
    srcMobile: '/src/assets/fearsun-mobile.webp',
    srcLaptop: '/src/assets/fearsun-laptop.webp',
    srcDesktop: '/src/assets/fearsun-desktop.webp',
    category: 'mens-shirts'
  },
  {
    name: 'Sneakpads',
    srcMobile: '/src/assets/sneakpads-mobile.webp',
    srcLaptop: '/src/assets/sneakpads-laptop.webp',
    srcDesktop: '/src/assets/sneakpads-desktop.webp',
    category: 'smartphones'
  },
  {
    name: 'MagicKey',
    srcMobile: '/src/assets/magickey-mobile.webp',
    srcLaptop: '/src/assets/magickey-laptop.webp',
    srcDesktop: '/src/assets/magickey-desktop.webp',
    category: 'womens-dresses'
  },
  {
    name: 'MRFetch',
    srcMobile: '/src/assets/mrfetch-mobile.webp',
    srcLaptop: '/src/assets/mrfetch-laptop.webp',
    srcDesktop: '/src/assets/mrfetch-desktop.webp',
    category: 'tops'
  }
]

const buttonStyle = {
  width: '32px',
  background: '#2563eb',
  borderRadius: '50%',
  padding: '5px',
  marginLeft: '10px',
  marginRight: '10px'
}

const arrowStyle = {
  color: 'white'
}

const slideProperties = {
  duration: 3000,
  transitionDuration: 500,
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <ArrowLeftIcon style={{ ...arrowStyle }} />
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }}>
      <ArrowRightIcon style={{ ...arrowStyle }} />
    </button>
  ),
  indicators: () => <span className='indicator' />
}

export const Slider = () => {
  const navigate = useNavigate()

  return (
    <div className='slide-container'>
      <Fade {...slideProperties}>
        {images.map((img, index) => (
          <div
            className='cursor-pointer'
            onClick={() => {
              navigate(`/category/${img.category}`)
            }}
            key={index}
          >
            <picture>
              <source media='(min-width:920px)' srcSet={img.srcDesktop} />
              <source media='(min-width:520px)' srcSet={img.srcLaptop} />
              <img className='w-full' src={img.srcMobile} alt={img.name} />
            </picture>
          </div>
        ))}
      </Fade>
    </div>
  )
}
