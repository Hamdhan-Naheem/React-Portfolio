import React from 'react';
import Intro from './Components/intro/Intro';
import About from './Components/About/About';
import ProjectList from './Components/ProjectList/ProjectList';
import Contact from './Components/contact/Contact';

function App() {
  return (
    <div>
      <Intro/>
      <About/>
      <ProjectList/>
      <Contact/>
    </div>
  );
}

export default App;
