export interface Product {
  id: string | number;
  name: string;
  price: number;
  currency?: string;
  image: string;
  category: string;
  badge?: string;
  tag?: string;
  discount?: number;
}