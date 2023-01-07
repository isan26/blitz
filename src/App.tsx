import './App.css';
import Basic from './components/basic'
import Funny from './behaviours/funny'
import behaviours from 'behaviours';
import components from 'components';

import BehaviourFactory from 'core/Classes/BehaviourFactory';
import ComponentFactory from 'core/Classes/ComponentFactory';
import Blitz from 'core';

import testui from 'exampledata/testui.json';

const internalComponents = new ComponentFactory(components);
const internalBehaviours = new BehaviourFactory(behaviours);

const blitz = Blitz(internalComponents, internalBehaviours);

const content = blitz(testui as any);

console.log("Content: ", content);

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <article>
        {content}
      </article>
    </div>
  );
}

export default App;
