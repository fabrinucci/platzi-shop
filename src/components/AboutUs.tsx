import { CheckCircleIcon } from '@heroicons/react/24/outline'

const aboutArr = [
  {
    title: 'Who are we?',
    description:
      'Welcome to Shopi, a space dedicated to offer a unique online shopping experience. unique online shopping experience. We are a passionate team of committed to providing high quality products and exceptional service to our customers. exceptional service to our customers. Our commitment is to create a reliable and friendly platform that allows you to find what you need easily and you to find what you need easily and securely.'
  },
  {
    title: 'Our mision',
    description:
      'At Shopi, our mission is to meet the needs of our customers by offering carefully selected by offering carefully selected products that meet high quality standards. products that meet high quality standards. We seek to exceed expectations by providing personalized service, exceptional customer exceptional customer service and a hassle-free online shopping experience. hassle-free online shopping experience.'
  },
  {
    title: 'Our vision',
    description:
      'We envision ourselves as a leading eCommerce company, recognized for      excellence in product quality, constant innovation and outstanding customer service. We aspire to build strong relationships with our customers, based on trust and satisfaction.'
  },
  {
    title: 'Our values',
    description: 'At Shopi, our values are the pillar of everything we do:',
    values: [
      {
        title: 'Integrity',
        description:
          'We operate in an ethical and transparent manner, always maintaining the trust of our customers and partners.'
      },
      {
        title: 'Quality',
        description:
          'We strive to offer the highest quality products, ensuring the satisfaction and trust of our customers.'
      },
      {
        title: 'Customer Service',
        description:
          'We place our customers at the center of our operations, providing personalized and attentive service in every interaction.'
      },
      {
        title: 'Innovation',
        description:
          'We continually seek ways to improve and evolve, adopting cutting-edge technologies and practices to meet the changing needs of our customers.'
      },
      {
        title: 'Sustainability',
        description:
          'We care about the environmental and social impact of our operations, promoting responsible and sustainable business practices.'
      }
    ]
  }
]

export const AboutUs = () => {
  return (
    <div className='mx-auto mt-6 w-[80%] max-w-[768px] lg:mt-14'>
      <h4 className='text-center text-2xl'>About Us</h4>
      <div className='mt-8'>
        {aboutArr.map(({ title, description, values }, index) => (
          <div key={index} className='mb-4'>
            <h6 className='text-lg font-semibold'>{title}</h6>
            <p className='mt-1'>{description}</p>
            {values && (
              <ul className=' flex flex-col'>
                {values.map(({ title, description }, index) => (
                  <li
                    key={index}
                    className='mt-4 flex items-start justify-center font-semibold'
                  >
                    <div>
                      <CheckCircleIcon
                        className='mr-1
                      mt-[.1rem] h-6 w-6 text-blue-600'
                      />
                    </div>
                    <div>
                      {title}:
                      <span className='ml-1 font-normal'>{description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
