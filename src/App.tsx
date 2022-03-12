import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";

function App() {
    const [bool, setBoul] = useState(true);

  return (
    <div className="App">
      <Accordion
          bool={bool}/>
    </div>
  );
}

export default App;
