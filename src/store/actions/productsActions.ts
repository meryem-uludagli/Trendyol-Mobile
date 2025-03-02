import {createAsyncThunk} from '@reduxjs/toolkit';
import {PRODUCTS_URL} from '../../service/urls';
import {getRequest} from '../../service/verbs';
import {Params} from '../../models/data/productState';

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

const getPopularProducts = createAsyncThunk(
  'products/getPopularProducts',
  async (params: object) => {
    const response = await getRequest(params, PRODUCTS_URL.POPULAR_PRODUCTS);
    return response.data;
  },
);

const getProductDetail = createAsyncThunk(
  'products/getProductDetail',
  async (params: Params) => {
    const productUrl = `${PRODUCTS_URL.ALL_PRODUCTS}/${params.id}`;
    const response = await getRequest(params, productUrl);
    return response.data;
  },
);
export {getBestSellerProducts, getPopularProducts, getProductDetail};
