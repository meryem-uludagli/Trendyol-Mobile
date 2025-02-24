import {configureStore} from '@reduxjs/toolkit';
import {productSlice} from './slice/productSlice';

export const Store = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
});
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
