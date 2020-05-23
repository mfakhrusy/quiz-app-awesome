import React from 'react';
import Layout, { VariantType } from '../../components/Layout';

const WelcomeScreen = () => {
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
