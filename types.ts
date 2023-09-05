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
  Skincare = 'skincare',
  Groceries = 'groceries',
  HomeDecoration = 'home-decoration',
  Furniture = 'furniture',
  Tops = 'tops',
  WomensDresses = 'womens-dresses',
  WomensShoes = 'womens-shoes',
  MensShirts = 'mens-shirts',
  MensShoes = 'mens-shoes',
  MensWatches = 'mens-watches',
  WomensWatches = 'womens-watches',
  WomensBags = 'womens-bags',
  WomensJewellery = 'womens-jewellery',
  Sunglasses = 'sunglasses',
  Automotive = 'automotive',
  Motorcycle = 'motorcycle',
  Lightin = 'lighting'
}

export interface Rating {
  rate: number
  count: number
}
