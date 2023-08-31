import { useState } from 'react'
import { type Product, type ProductCart } from '../../types'

export const useCart = () => {
  const [count, setCount] = useState<number>(0)
  const [isOpenCart, setIsOpenCart] = useState<boolean>(false)
  const [productToShow, setProductToShow] = useState<Product | {}>({})
  const [cart, setCart] = useState<ProductCart[]>([])
  const [quantity, setQuantity] = useState<number>(0)

  const increaseCount = (operation: number) => {
    setCount(count + operation)
  }
  const decreaseCount = (operation: number) => {
    setCount(count - operation)
  }

  const updateProductToShow = (product: Product) => {
    setProductToShow(product)
  }

  const openCart = () => {
    setIsOpenCart(true)
  }

  const closeCart = () => {
    setIsOpenCart(false)
  }

  const addToCart = (product: Product) => {
    const productInCart = cart.find((item) => item.id === product.id)
    if (productInCart) {
      setQuantity(productInCart.quantity++)
      increaseCount(1)
      return
    }

    const newProduct = {
      ...product,
      quantity: 1
    }
    setCart([...cart, newProduct])
    increaseCount(1)
  }

  const removeFromCart = (product: ProductCart) => {
    const newCart = cart.filter((item) => item.id !== product.id)
    setCart(newCart)
    decreaseCount(product.quantity)
  }

  const removeAllFromCart = () => {
    setCart([])
    decreaseCount(count)
  }

  return {
    count,
    isOpenCart,
    productToShow,
    quantity,
    cart,
    openCart,
    closeCart,
    addToCart,
    removeFromCart,
    removeAllFromCart,
    updateProductToShow
  }
}
