import {Product} from './productState';

interface CartState {
  cart: Product[];
  totalPrice: number;
}

export type {CartState};
