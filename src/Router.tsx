import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WelcomeScreen from './screens/WelcomeScreen';
import QuizScreen from './screens/QuizScreen';
import FinishPage from './screens/FinishPage';

interface Props {
  isLoggedIn?: boolean;
  children: React.ReactNode;
  path: string;
};

const ProtectedRoute: React.FC<Props> = ({isLoggedIn, children, path}) => {
  return <Route path={path}>{children}</Route>
};

const Router = () => (
  <Switch>
    <Route exact path="/welcome">
      <WelcomeScreen />
    </Route>
    <ProtectedRoute path="/quiz">
      <QuizScreen />
    </ProtectedRoute>
    <ProtectedRoute path="/finish">
      <FinishPage />
    </ProtectedRoute>
    <Route path="*">
      <div>404 not found</div>
    </Route>
  </Switch>
);

export default Router;
