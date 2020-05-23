import { AuthActionTypes, authTypes } from '../types/auth';

export const login = (): AuthActionTypes => ({
  type: authTypes.LOGIN,
});

export const logout = (): AuthActionTypes => ({
  type: authTypes.LOGIN,
});
