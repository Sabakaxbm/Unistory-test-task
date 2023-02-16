import { BrowserRouter } from 'react-router-dom';
import React from 'react';

export const withRouter = (component: () => React.ReactNode) => () =>
  <BrowserRouter>{component()}</BrowserRouter>;
