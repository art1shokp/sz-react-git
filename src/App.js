import React from 'react';
import './github/MainStyles.css';
import HeaderMain from './github/HeaderMain';
import MainGit from './github/MainGit'
import FooterMain from './github/FooterMain';

function App() {
  return (
    <div className="App">
        <HeaderMain/>
        <MainGit/>
        <FooterMain/>
    </div>
  );
}

export default App;
