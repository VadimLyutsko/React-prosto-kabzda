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


export const ResetEffect = () => {
    const [counter, setCounter] = useState(1)

    console.log("Component rendered")

    useEffect(() => {

        console.log("Effect occurred" + counter)


        return () => {
            console.log(("Reset effect" + counter));
        }

    }, [counter])

    const increase = () => {
        setCounter(counter + 1)
    }

    return <>
        <div>
            Hello, counter: {counter}
            <button onClick={increase}>+
            </button>
        </div>

    </>
}


export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    console.log("Component rendered" + text)

    useEffect(() => {
            const handler = (e: KeyboardEvent) => {
                console.log(e.key)
                setText((state) => state + e.key)
            }

            window.addEventListener('keypress', handler)

            return () => {
                window.removeEventListener('keypress', handler)
            }

        }, []
    )


    return <>
        <div>
            Typed text: {text}
        </div>

    </>
}