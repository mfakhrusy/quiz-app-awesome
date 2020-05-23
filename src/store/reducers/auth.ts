import { AuthActionTypes, authTypes } from '../types/auth';

const initialState = false;

export const isLoggedIn = (state = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    case authTypes.LOGIN:
      return true;
    case authTypes.LOGOUT:
      return false
    default:
      return state;
  }
}