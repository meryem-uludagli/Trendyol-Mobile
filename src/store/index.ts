import {configureStore} from '@reduxjs/toolkit';
import {productSlice} from './slice/productSlice';
import {categoriesSlice} from './slice/categoriesSlice';
import {cartSlice} from './slice/cartSlice';

export const Store = configureStore({
  reducer: {
    products: productSlice.reducer,
    categories: categoriesSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
