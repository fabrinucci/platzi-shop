import { useNavigate } from 'react-router-dom'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

const images = [
  {
    name: 'Fearsun',
    mobile: 'fearsun-mobile',
    laptop: 'fearsun-laptop',
    desktop: 'fearsun-desktop',
    category: 'mens-shirts'
  },
  {
    name: 'Sneakpads',
    mobile: 'sneakpads-mobile',
    laptop: 'sneakpads-laptop',
    desktop: 'sneakpads-desktop',
    category: 'smartphones'
  },
  {
    name: 'MagicKey',
    mobile: 'magickey-mobile',
    laptop: 'magickey-laptop',
    desktop: 'magickey-desktop',
    category: 'womens-dresses'
  },
  {
    name: 'MRFetch',
    mobile: 'mrfetch-mobile',
    laptop: 'mrfetch-laptop',
    desktop: 'mrfetch-desktop',
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
  const imagePath = '/assets'

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
              <source
                media='(min-width:920px)'
                srcSet={`${imagePath}/${img.desktop}.webp`}
              />
              <source
                media='(min-width:520px)'
                srcSet={`${imagePath}/${img.laptop}.webp`}
              />
              <img
                className='w-full'
                src={`${imagePath}/${img.mobile}.webp`}
                alt={img.name}
              />
            </picture>
          </div>
        ))}
      </Fade>
    </div>
  )
}
