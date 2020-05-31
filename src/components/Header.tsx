import React from 'react';
import styled from 'styled-components';

const HeaderText = styled.span`
  font-size: 8px;
`;

const Container = styled.div`
  height: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = () => (
  <Container>
    <HeaderText>
      Q App
    </HeaderText>
  </Container>
);

export default Header;
