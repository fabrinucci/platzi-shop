export interface Product {
  id:          number,
  title:       string,
  price:       number,
  category:    Categories,
  description: string,
  image:       string,
  rating:      Rating
}

export enum Categories {
  Electronics =    "electronics",
  Jewelery =       "jewelery",
  MensClothing=    "men's clothing",
  WomensClothing = "women's clothing"
}

export interface Rating {
  rate:  number,
  count: number
}
