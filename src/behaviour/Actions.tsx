// Action Types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const LOGOUT = 'LOGOUT';
// export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
// export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
// export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

// export const fetchProductsStart = (page : any) => ({
//   type: FETCH_PRODUCTS_START,
//   payload: page,
// });

// export const fetchProductsSuccess = (products : any, totalPages : any) => ({
//   type: FETCH_PRODUCTS_SUCCESS,
//   payload: { products, totalPages },
// });

// export const fetchProductsFailure = (error : any) => ({
//   type: FETCH_PRODUCTS_FAILURE,
//   payload: error,
// });



export const loginRequest = (email : string, password :string) => ({
  type: LOGIN_REQUEST,
  payload: { email, password },
});


export const loginSuccess = (token : string) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

