import React, {useEffect, useState} from "react";

export default {
    title: "UseEffectDemo"
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    console.log("SimpleExample")

    useEffect(() => {
        console.log("useEffect every render");
        document.title = counter.toString();
    })

    useEffect(() => {
        console.log("useEffect only first render // didMount");
        document.title = counter.toString();
    }, [])

    useEffect(() => {
        console.log("useEffect first render nnd if counter change");
        document.title = counter.toString();
    }, [counter])


    return <>
        <div>
            Hello, {counter}
        </div>

        <button onClick={() => setCounter(counter + 1)}>Fake+</button>
        <button onClick={() => setFake(fake + 1)}>Counter+</button>

    </>
}


export const SetTimeoutExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)
    console.log("SimpleExample")

    useEffect(() => {

        setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)

    }, [])




    return <>
        <div>
            counter: {counter}
            fake:{fake}
        </div>
        {/*<button onClick={() => setCounter(counter + 1)}>Counter+</button>*/}
        {/*<button onClick={() => setFake(fake + 1)}>Fake+</button>*/}
    </>
}



