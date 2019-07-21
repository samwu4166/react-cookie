import React from 'react';
import Member from './compenents/member';
import {CookiesProvider} from 'react-cookie';

const App = () => {
  return (
    <CookiesProvider>
      <Member></Member>
    </CookiesProvider>
  );
};

export default App;