import React, { useState, useEffect } from 'react';
import './App.css';

import Aux from './components/hoc/Auxilary/Auxilary';
import Splash from './components/splash/splash';
import Traits from './components/traits/traits';
import CodeShowcase from './components/code-showcase/code-showcase';

const App = props => {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', onAppScroll);
    return (()=> window.removeEventListener('scroll', onAppScroll));
  }, [])

  const onAppScroll = (event) => {
    setScrollY(window.scrollY);
  }

  return (
    <Aux styling="App">
      <Splash />
      <Traits scrollPos={scrollY}/>
      <CodeShowcase />
    </Aux>
  )
}

export default App;
