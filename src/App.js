import React from 'react';
import './App.css';
import Acordian from './components/Acordian/Acordian';

function App() {
  return (
    <div className="App">
     <Acordian title="What is your return policy"
     content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, enim." />
      <Acordian title="What is your return policy"
     content="<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, enim.</p>
     </br>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, enim.</p>
     " />
      <Acordian title="What is your return policy"
     content="<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, enim.<p/>
     </br>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, enim.<p/>
     </br>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, enim.<p/>
      </br>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, enim.<p/>
     " />
  
    </div>
  );
}

export default App;
