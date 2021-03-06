import React, { useState, useEffect } from 'react';
import './App.css';

import code_service from './service/code-service';

import Aux from './components/hoc/Auxilary/Auxilary';
import Splash from './components/splash/splash';
import Traits from './components/traits/traits';
import CodeShowcase from './components/code-showcase/code-showcase';
import ArtShowcase from './components/painting-showcase/art-showcase';
import Intro from './components/intro/intro';
import CodeCutscene from './components/code-cutscene/code-cutscene';
import ArtCutscene from './components/art-cutscene/art-cutscene';
import Outro from './components/outro/outro';

const App = props => {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', onAppScroll);
    return (() => window.removeEventListener('scroll', onAppScroll));
  }, [])

  const onAppScroll = (event) => {
    setScrollY(window.scrollY);
  }

  return (
    <Aux styling="App">
      <Splash />
      <Intro scrollPos={scrollY} />
      <Traits scrollPos={scrollY} />
      <CodeCutscene scrollPos={scrollY} />
      {
        // Populate Code showcases
        code_service.fetch().map((service, index) => {
          return <CodeShowcase
            key={index}
            heading={service.heading}
            description={service.description}
            git={service.git}
            techstack={service.technologies}
            screenshots={service.screenshots}
          />
        })
      }
      <ArtCutscene scrollPos={scrollY}/>
      <ArtShowcase />
      <Outro scrollPos={scrollY} />
    </Aux>
  )
}

export default App;
