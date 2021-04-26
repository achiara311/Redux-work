import { createReducer, on, createAction, createFeatureSelector, createSelector } from '@ngrx/store';
import * as AppState from '../../state/app.state';

import { Product } from '../product';

//it is the reducer that defines the interfaces for our state

export interface State extends AppState.State {
  products: ProductState; //goes into select
}

//interface has our state, is our store
export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}

//initialize the state 
//use our ProductState interface as strongly typed
const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: []
};

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
  getProductFeatureState,
  state => state.showProductCode
);

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  state => state.currentProduct
);

export const getProducts = createSelector(
  getProductFeatureState,
  state => state.products
);

export const productReducer = createReducer<ProductState>(
  initialState,
  on(createAction('[Product] Toggle Product Code'), (state): ProductState => {
    return {
      ...state,
      showProductCode: !state.showProductCode
    };
  })
);
