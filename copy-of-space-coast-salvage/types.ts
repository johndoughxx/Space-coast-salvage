
export interface Vehicle {
  id: string;
  year: number;
  make: string;
  model: string;
  image: string;
  price?: number;
  status: 'Available' | 'Sold' | 'Dismantled';
  description?: string;
}

export interface Wheel {
  id: string;
  size: string;
  brand: string;
  price: number;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}
