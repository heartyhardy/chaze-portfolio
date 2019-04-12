import React, { useState, useEffect } from 'react';
import './App.css';

import Aux from './components/hoc/Auxilary/Auxilary';
import Splash from './components/splash/splash';
import Traits from './components/traits/traits';

const App = props => {
  return(
    <Aux styling="App">
      <Splash />
      <Traits />
    </Aux>
  )
}

export default App;
