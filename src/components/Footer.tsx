import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../store/actions/auth';
import { RootState } from '../store/reducers';
import { useHistory } from 'react-router-dom';

const Footer = () => {
  const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn);
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = React.useCallback(() => dispatch(logoutAction()), [dispatch]);

  React.useEffect(() => {
    console.log(isLoggedIn)
    if (!isLoggedIn) {
      history.push("/welcome")
    }
  }, [isLoggedIn, history])

  return (
  <div>
    <button onClick={() => logout()}>
      Logout
    </button>
  </div>
)};

export default Footer;
