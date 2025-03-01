import {createAsyncThunk} from '@reduxjs/toolkit';
import {CATEGORIES_URLS} from '../../service/urls';
import {getRequest} from '../../service/verbs';

const getAllCategories = createAsyncThunk(
  'categories/getAllCategories',
  async (params: object) => {
    const response = await getRequest(params, CATEGORIES_URLS.CATEGORIES);
    return response.data;
  },
);
export {getAllCategories};
