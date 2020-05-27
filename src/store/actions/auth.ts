import { AuthActionTypes, authTypes } from '../types/auth';

export const loginAction = (): AuthActionTypes => ({
  type: authTypes.LOGIN,
});

export const logoutAction = (): AuthActionTypes => ({
  type: authTypes.LOGOUT,
});
