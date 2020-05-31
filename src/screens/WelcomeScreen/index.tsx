import React from 'react';
import Layout, { VariantType } from '../../components/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/reducers';
import { useHistory } from 'react-router-dom';
import { loginAction } from '../../store/actions/auth';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WelcomeContainer = styled.div`
  margin-bottom: 10px;
`;

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
      <Container>
        <WelcomeContainer>Selamat Datang di Aplikasi Kuis</WelcomeContainer>
        <div>
          <button onClick={() => login()}>
            Login
          </button>
        </div>
      </Container>
    </Layout>
  )
}

export default WelcomeScreen;
