import React from 'react';
import Layout, { VariantType } from '../../components/Layout';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';

const WelcomeScreen = () => {
  const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn);

  console.log("apakah log in: ", isLoggedIn);
  return (
    <Layout variant={VariantType.Hidden}>
      <div>
        <div>
          <div>welcome</div>
          <div></div>
        </div>
      </div>
    </Layout>
  )
}

export default WelcomeScreen;
