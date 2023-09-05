import { type Categories, type Products } from '../../types'

const URL = 'https://dummyjson.com/products'

export const getAllProducts = async (): Promise<Products | undefined> => {
  try {
    const res = await fetch(URL)
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getProductsByCategory = async (
  category: Categories
): Promise<Products | undefined> => {
  try {
    const res = await fetch(`${URL}/category/${category}`)
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
