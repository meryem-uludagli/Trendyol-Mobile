import {configureStore} from '@reduxjs/toolkit';
import {productSlice} from './slice/productSlice';
import {categoriesSlice} from './slice/categoriesSlice';

export const Store = configureStore({
  reducer: {
    products: productSlice.reducer,
    categories: categoriesSlice.reducer,
  },
});
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
