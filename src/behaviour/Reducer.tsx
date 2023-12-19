import {LOGIN_SUCCESS} from './Actions'
const initialState = {
    token: null,
    error: null
  };
  
  const loginReducer = (state = initialState, action : any) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
          token: action.payload,
        };
      case 'LOGIN_FAILED':
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default loginReducer;
  