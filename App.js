import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/about';
import React from 'react';
import Alert from './components/Alert';



function App() {
  const [mode, setMode] = useState('light'); // Fixed the case of 'setMode'
  
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black'
    } 
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  };

  return (
    <>
      <Navbar title="C.S.Dhananjay" aboutText="About Text" mode={mode} toggleMode={toggleMode} />
      <Alert/>
      <div className="container my-3">
        <TextForm heading="Hello Sir. C.S.Dhananjay" />
        <About />
      </div>
    </>
  );
}

export default App;
