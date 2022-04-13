import React, {ChangeEvent, useRef, useState} from 'react';


export default {
    title: 'input',
}


export const UncontrolledInput = () => <input/>;
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue)
    }


    return <><input onChange={onChange}/> - {value}</>
};

export const TrackValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("")
    const inpRef = useRef<HTMLInputElement>(null);
    const save = () => {
        const el = inpRef.current as HTMLInputElement;
        setValue(el.value)
    }


    return <><input ref={inpRef}/>
        <button onClick={save}>save</button>
        - actual value: {value}  </>

};

