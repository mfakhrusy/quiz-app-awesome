import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { white, mainColor } from '../utils/colors';

const Container = styled.div`
  height: calc(100vh - 10px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${mainColor};
  color: ${white};
  padding: 5px;
`;

export enum VariantType {
  Default,
  Hidden,
};

interface Props {
  children: React.ReactNode;
  variant?: VariantType;
};

const Layout: React.FunctionComponent<Props> = ({children, variant}) => (
  <Container>
    {variant === VariantType.Default ? <Header /> : null}
    {children}
    {variant === VariantType.Default ? <Footer /> : null}
  </Container>
);

Layout.defaultProps = {
  variant: VariantType.Default,
};

export default Layout;
