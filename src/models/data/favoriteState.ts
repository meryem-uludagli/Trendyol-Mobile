import {Product} from './productState';

interface FavoriteState {
  favorites: Product[];
  pending: boolean;
  error: any;
}
export type {FavoriteState};
