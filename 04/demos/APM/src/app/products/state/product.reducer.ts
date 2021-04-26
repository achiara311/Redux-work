import { createReducer, on, createAction } from '@ngrx/store';

//start with making export const productReducer
export const productReducer = createReducer(
  { showProductCode: true },
  on(createAction('[Product] Toggle Product Code'), state => {
    console.log('original state dude: ' + JSON.stringify(state));
    return {
      ...state,
      showProductCode: !state.showProductCode
    };
  })
);

