import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import LoadURLForm from 'LoadFromUrl';
import html from 'exampledata/html.json';
import register from 'exampledata/register.json';
import jokes from 'exampledata/jokes.json';
import fetchExample from 'exampledata/fetchExample.json';

import behaviours from 'behaviours';
import components from 'components';
import Blitz from '@blitzui/core';


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
      case 'load-from-api': setData(blitz(fetchExample));
        break;

      default:
        setData(blitz(fetchExample));
    }
  }, [config]);

  return (
    <div className='container'>
      <header className='container'>
        <Navbar setConfig={setConfig} />
      </header>
      <main className='container'>
        <h1>Blitz UI</h1>
        {config === "url" && <LoadURLForm setData={setData} blitz={blitz} />}
        <div style={{ marginTop: "5rem" }}>
          {data}
        </div>
      </main>
      <footer className='container'>
        <p>Blitz UI is a React UI library that allows you to build forms and other UI components from JSON.</p>
        <p>It is a work in progress and is not yet ready for production use.</p>
      </footer>
    </div>
  );
}

export default App;
