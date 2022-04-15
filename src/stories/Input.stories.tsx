import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";


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

export const controlledInput = () => {
    const [parentValue, setParentValue] = useState("");
    const change = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <input value={parentValue} onChange={change}/>
    )
}

export const controlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true);
    const change = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return (
        <input type='checkbox' checked={parentValue}  onChange={change}/>
    )
}

export const controlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined);
    const change = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <select value={parentValue} onChange={change}>
            <option >none</option>
            <option value={"1"}>Minsk</option>
            <option value={"2"}>Moscow</option>
            <option value={"3"}>Kiev</option>
        </select>
    )
}