import React, { useState, useEffect } from 'react';
import './App.css';

import Aux from './components/hoc/Auxilary/Auxilary';
import Splash from './components/splash/splash';

const App = props => {
  return(
    <Aux styling="App">
      <Splash />
    </Aux>
  )
}

export default App;
