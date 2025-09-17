export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'fixie' | 'velg' | 'ban' | 'gear' | 'frame' | 'saddle' | 'stang';
  brand: string;
  description: string;
  specifications: Record<string, string>;
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}