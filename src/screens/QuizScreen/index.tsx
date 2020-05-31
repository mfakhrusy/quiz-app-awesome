import React from 'react';
import Layout from '../../components/Layout';
import styled from 'styled-components';

// import only, still unused
import { mockData } from './mock';

const Container = styled.div`
  flex-grow: 1;
`;

const QuizScreen = () => {
  return (
    <Layout>
      <Container>
        quiz!
      </Container>
    </Layout>
  )
}

export default QuizScreen;
