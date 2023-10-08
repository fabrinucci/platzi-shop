import { ChevronUpIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const FAQArr = [
  {
    question: 'How can I place an order at Shopi?',
    answer:
      "Ordering at Shopi is quick and easy. First, browse our online store, choose the products you want and add them to the shopping cart. Then, proceed to checkout by following the on-screen prompts and you're done! Your order will be in process and we will keep you informed about its status."
  },
  {
    question: 'What payment options are available?',
    answer:
      'We accept several payment options, including credit cards, debit cards, PayPal and bank transfers. During the checkout process, you will be able to select the option that suits you best and complete the transaction securely.'
  },
  {
    question: 'How long will it take for my order to arrive?',
    answer:
      'Delivery time may vary depending on your location and the product selected. Normally, we indicate estimated delivery times on each product page. Once you place your order, you will receive an update on the specific delivery time.'
  },
  {
    question: 'Can I make exchanges or returns?',
    answer:
      'Yes, at Shopi we value your satisfaction. If you need to make changes to your order or request a return, please see our return and exchange policy for detailed information on how to proceed.'
  },
  {
    question: 'How can I contact customer service?',
    answer:
      'For any questions, doubts or requests for assistance, our customer service team is available to help you. You can contact us through our online contact form or write to our email address. We will be happy to assist you.'
  },
  {
    question: 'Do you offer international shipping?',
    answer:
      'Yes, at Shopi we offer international shipping. During the checkout process, you will be able to select your destination country and see the shipping options available, as well as the associated costs.'
  }
]

export const FAQ = () => {
  const [isOpenQuestion, setIsOpenQuestion] = useState<boolean[]>(
    Array(FAQArr.length).fill(false)
  )

  const toggleFAQ = (index: number) => {
    const newOpenQ = [...isOpenQuestion]
    newOpenQ[index] = !newOpenQ[index]
    setIsOpenQuestion(newOpenQ)
  }

  return (
    <div className='mx-auto mt-8 w-[80%] max-w-[628px]'>
      <div>
        <h4 className='text-center text-2xl'>Frequently Asked Questions</h4>
      </div>
      <div className='mt-14'>
        {FAQArr.map((faq, index) => (
          <div key={index} className='mt-2 border-b border-slate-300 pb-4'>
            <div
              className='flex cursor-pointer items-start justify-between gap-3 lg:gap-0'
              onClick={() => {
                toggleFAQ(index)
              }}
            >
              <h6 className='text-lg font-semibold'>{faq.question}</h6>
              <div>
                <ChevronUpIcon
                  className={`${
                    isOpenQuestion[index] ? 'rotate-180' : ''
                  } w-5 transition-all duration-500`}
                />
              </div>
            </div>
            <div className='mt-2'>
              {isOpenQuestion[index] && <p>{faq.answer}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
