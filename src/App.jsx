import React from 'react';
import { useSelector } from 'react-redux';

import Home from './components/Home';
import Name from './components/Name';

const App = () => {
  const name = useSelector((state) => state.name);

  return <>{name ? <Home /> : <Name />}</>;
};

export default App;
