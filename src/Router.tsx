import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WelcomeScreen from './screens/WelcomeScreen';
import QuizScreen from './screens/QuizScreen';
import FinishPage from './screens/FinishPage';

const Router = () => (
  <Switch>
    <Route exact path="/">
      <WelcomeScreen />
    </Route>
    <Route path="/quiz">
      <QuizScreen />
    </Route>
    <Route path="/finish">
      <FinishPage />
    </Route>
    <Route path="*">
      <div>404 not found</div>
    </Route>
  </Switch>
);

export default Router;
