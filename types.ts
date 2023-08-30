export interface Product {
  id: number
  title: string
  price: number
  category: Categories
  description: string
  image: string
  rating: Rating
}

export interface ProductCart extends Product {
  quantity: number
}

export interface Order {
  id: string
  date: string
  products: ProductCart[]
  totalProducts: number
  totalPrice: number
}

export enum Categories {
  Electronics = 'electronics',
  Jewelery = 'jewelery',
  MensClothing = "men's clothing",
  WomensClothing = "women's clothing"
}

export interface Rating {
  rate: number
  count: number
}
