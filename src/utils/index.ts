import { type User, type ProductCart } from '../../types'

export const totalPrice = (products: ProductCart[]) => {
  const price = products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  return Math.round(price * 100) / 100
}

export const totalQuantity = (products: ProductCart[]) => {
  return products.reduce((acc, item) => acc + item.quantity, 0)
}

export const getDate = () => {
  const fullDate = new Date()
  const day = fullDate.getDate()
  const month = fullDate.getMonth() + 1
  const year = fullDate.getFullYear()

  const date = `${month}/${day}/${year}`
  return date
}

export const capitalizeWords = (word: string) => {
  const newWord = word
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  return newWord
}

export const convertToKebabCase = (word: string) => {
  let newWord = word.charAt(0).toLowerCase()

  for (let i = 1; i < word.length; i++) {
    const letter = word[i]

    if (letter === letter.toUpperCase()) {
      newWord += '-' + letter.toLowerCase()
    } else {
      newWord += letter
    }
  }

  return newWord
}

export const addSpaceToCamelCase = (word: string) => {
  let result = ''

  for (let i = 0; i < word.length; i++) {
    const letter = word[i]

    if (letter === letter.toUpperCase() && i !== 0) {
      result += ' '
    }

    result += letter
  }

  return result
}

export const userInitialValues: User = {
  fullname: '',
  email: '',
  password: '',
  confirmPassword: ''
}
