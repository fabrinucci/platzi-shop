import { type Product } from '../../types'

export const getAllProducts = async (): Promise<Product[] | undefined> => {
  try {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
