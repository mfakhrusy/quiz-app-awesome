import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Router';
import Layout from './components/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
