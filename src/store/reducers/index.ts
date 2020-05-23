import { combineReducers } from 'redux';
import * as authReducers from './auth';

const rootReducers = combineReducers({
  ...authReducers,
});

export type RootState = ReturnType<typeof rootReducers>;

export default rootReducers;
