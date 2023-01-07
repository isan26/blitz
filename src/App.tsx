import React, { useEffect } from 'react';
import './App.css';
import testui from 'exampledata/testui.json';
import register from 'exampledata/register.json';

import behaviours from 'behaviours';
import components from 'components';

import Blitz from 'core';


function App() {
  const blitz = Blitz(components, behaviours);

  return (
    <div className="App">
      <header className="App-header">
        {blitz(register)}
      </header>
    </div>
  );
}

export default App;
