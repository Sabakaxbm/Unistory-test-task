import React from 'react';
import { withProviders } from './providers';
import './style/index.css';
import { Routing } from '../pages';

function App() {
  return (
    <div>
      <Routing />
    </div>
  );
}

export default withProviders(App);
