export interface Products {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: Categories
  thumbnail: string
  images: string[]
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
  Smartphones = 'smartphones',
  Laptops = 'laptops',
  Fragrances = 'fragrances',
  Tops = 'tops',
  HomeDecoration = 'home-decoration',
  Groceries = 'groceries',
  Skincare = 'skincare',
  Furniture = 'furniture',
  MensShirts = 'mens-shirts',
  MensShoes = 'mens-shoes',
  MensWatches = 'mens-watches',
  WomensBags = 'womens-bags',
  WomensDresses = 'womens-dresses',
  WomensShoes = 'womens-shoes',
  WomensWatches = 'womens-watches',
  WomensJewellery = 'womens-jewellery',
  Sunglasses = 'sunglasses',
  Automotive = 'automotive',
  Motorcycle = 'motorcycle',
  Lighting = 'lighting'
}

export enum Electronics {
  Smartphones = 'smartphones',
  Laptops = 'laptops'
}
export enum Mens {
  MensShirts = 'mens-shirts',
  MensShoes = 'mens-shoes',
  MensWatches = 'mens-watches'
}

export enum Womens {
  Tops = 'tops',
  WomensBags = 'womens-bags',
  WomensDresses = 'womens-dresses',
  WomensShoes = 'womens-shoes',
  WomensWatches = 'womens-watches',
  WomensJewellery = 'womens-jewellery'
}

export enum Decoration {
  HomeDecoration = 'home-decoration',
  Furniture = 'furniture',
  Lighting = 'lighting'
}

export enum Others {
  Skincare = 'skincare',
  Automotive = 'automotive',
  Motorcycle = 'motorcycle',
  Sunglasses = 'sunglasses'
}

export interface Rating {
  rate: number
  count: number
}

export interface User {
  fullname: string
  email: string
  password: string
  confirmPassword: string
}

export interface UserSignIn
  extends Omit<User, 'fullname' | 'confirmPassword'> {}
