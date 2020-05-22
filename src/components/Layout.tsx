import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { white, mainColor } from '../utils/colors';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${mainColor};
  color: ${white};
`;

interface Props {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<Props> = ({children}) => (
  <Container>
    <Header />
    {children}
    <Footer />
  </Container>
);

export default Layout;
