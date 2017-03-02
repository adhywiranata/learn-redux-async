import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import QuestionsList from './QuestionsList';

const AppRoutes = () => (
  <BrowserRouter>
    <Route exact path='/' component={QuestionsList} />
  </BrowserRouter>
);

export default AppRoutes;
