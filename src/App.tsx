import React from 'react'
import './App.css';
import Header from './component/header';
import Experience from './component/experience';
import Skills from './component/skills';
import Projects from './component/projects';
import About from './component/about';
import Footer from './component/footer';

function App() {

  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
