import {createSlice} from '@reduxjs/toolkit';
import {ProductsState} from '../../models/data/productState';

const initialState: ProductsState = {
  products: [],
  bestSellerProducts: [],
  popularProducts: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});
export default productSlice.reducer;
