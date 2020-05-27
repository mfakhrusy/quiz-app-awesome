import React from 'react';
import Layout, { VariantType } from '../../components/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/reducers';
import { useHistory } from 'react-router-dom';
import { loginAction } from '../../store/actions/auth';

const WelcomeScreen = () => {
  const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn);
  const history = useHistory();
  const dispatch = useDispatch();

  const login = React.useCallback(() => dispatch(loginAction()), [dispatch])

  React.useEffect(() => {
    if (isLoggedIn) {
      history.push("/quiz");
    }
  }, [isLoggedIn, history]);
  
  return (
    <Layout variant={VariantType.Hidden}>
      <div>
        <div>
          <div>welcome</div>
          <div>
            <button onClick={() => login()}>
              Login
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default WelcomeScreen;
