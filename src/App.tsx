import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Select} from "./components/Select/Select";


function App() {
    const [bool, setBool] = useState(true);
    const onChange = () => {

    }
    const onclick = (value: any) => {

    }

    return (
        <div className="App">
            <Accordion
                titleValue="Hello!"
                collapsed={bool}
                onChange={onChange}
                items={[]}
                onclick={onclick}
            />
            {/*<Select value="Vadim" onChange={onChange} items={[]}/>*/}
        </div>
    );
}

export default App;
