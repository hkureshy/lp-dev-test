import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_LOADING,
  SET_BG_COLOR
} from './Types';


const INITIAL_STATE = {
  error: '',
  loading: false,
  authenticated: false,
  bgColor: 'white'
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true, error: '' };
    case UNAUTH_USER:
      return { ...state, authenticated: false, error: '' };
    case AUTH_LOADING:
      return { ...state, loading: action.payload };
    case SET_BG_COLOR:
      return { ...state, bgColor: action.payload };
    default:
      return state;
  }
}
