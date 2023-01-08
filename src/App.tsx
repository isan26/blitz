import React, { useEffect } from 'react';
import './App.css';
import testui from 'exampledata/testui.json';
import register from 'exampledata/register.json';
import demo from 'exampledata/demo.json';

import behaviours from 'behaviours';
import components from 'components';

import Blitz from 'core';


function App() {
  const blitz = Blitz(components, behaviours);

  return (
    <div className="App">
      <header className="App-header">
        {blitz(demo)}
      </header>
    </div>
  );
}

export default App;
