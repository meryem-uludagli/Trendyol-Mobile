import {configureStore} from '@reduxjs/toolkit';
import {productSlice} from './slice/productSlice';
import {categoriesSlice} from './slice/categoriesSlice';
import {cartSlice} from './slice/cartSlice';
import {authSlice} from './slice/authSlice';
import {favoriteSlice} from './slice/favoriteSlice';
import {userSlice} from './slice/userSlice';

export const Store = configureStore({
  reducer: {
    products: productSlice.reducer,
    categories: categoriesSlice.reducer,
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
    favorites: favoriteSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: getDeaultMiddleware =>
    getDeaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
