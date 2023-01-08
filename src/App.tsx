import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import LoadURLForm from 'LoadFromUrl';
import './App.css';
import html from 'exampledata/html.json';
import register from 'exampledata/register.json';
import jokes from 'exampledata/jokes.json';

import behaviours from 'behaviours';
import components from 'components';
import Blitz from 'core';


function App() {
  const blitz = Blitz(components, behaviours);
  const [config, setConfig] = useState('jokes');
  const [data, setData] = useState<JSX.Element | null>(null);

  useEffect(() => {
    switch (config) {
      case 'html':
        setData(blitz(html));
        break;
      case 'register':
        setData(blitz(register));
        break;
      case 'jokes':
        setData(blitz(jokes));
        break;
      case 'url': setData(null);
        break;

      default:
        setData(blitz(html));
    }
  }, [config]);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar setConfig={setConfig} />
        {config === "url" && <LoadURLForm setData={setData} blitz={blitz} />}
        <div style={{ marginTop: "5rem" }}>
          {data}
        </div>
      </header>
    </div>
  );
}

export default App;
