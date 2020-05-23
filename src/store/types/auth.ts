interface AuthTypes {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
};

export const authTypes: AuthTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
};

interface LoginAction {
  type: typeof authTypes.LOGIN;
};

interface LogoutAction {
  type: typeof authTypes.LOGOUT;
};

export type AuthActionTypes = LoginAction | LogoutAction;
