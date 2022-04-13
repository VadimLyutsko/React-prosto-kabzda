import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";


function App() {
    const [bool, setBool] = useState(true);

    return (
        <div className="App">
            <Accordion
                bool={bool}
                setBool={setBool}/>
        </div>
    );
}

export default App;
