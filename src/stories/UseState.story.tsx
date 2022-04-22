import React, {useState} from "react";

export default {
    title: "UseStateDemo"
}

export const Example1 = () => {
    const [counter, setCounter] = useState(0)//вместо начального значения можем дать тяжелую функцию(как р.мемо)

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>//в set.. можем дать функцию, не нужны перерисовки
        {counter}
    </>
}



