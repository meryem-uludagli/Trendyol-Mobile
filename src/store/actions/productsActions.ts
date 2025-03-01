import {createAsyncThunk} from '@reduxjs/toolkit';
import {PRODUCTS_URL} from '../../service/urls';
import {getRequest} from '../../service/verbs';

const getBestSellerProducts = createAsyncThunk(
  'products/getBestSellerProducts',
  async (params: object) => {
    const response = await getRequest(
      params,
      PRODUCTS_URL.BEST_SELLER_PRODUCTS,
    );
    return response.data;
  },
);
export {getBestSellerProducts};
