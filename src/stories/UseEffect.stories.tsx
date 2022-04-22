import React, {useEffect, useState} from "react";

export default {
    title: "UseEffectDemo"
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)
    console.log("SimpleExample")

    useEffect(() => {
        console.log("useEffect every render");
        document.title = counter.toString();
    })

    useEffect(() => {
        console.log("useEffect only first render // didMount");
        document.title = counter.toString();
    },[])

    useEffect(() => {
        console.log("useEffect first render nnd if counter change");
        document.title = counter.toString();
    },[counter])


    return <><div>
        Hello, {counter}
    </div>

        <button onClick={() => setCounter(counter + 1)}>+</button>

    </>
}



