import React, {useState} from "react";
import {Clock} from "./Clock";


export default {
    title: "Clock",
    component:Clock
}

export const BaseExample = () => {
    const [counter, setCounter] = useState(0)//вместо начального значения можем дать тяжелую функцию(как р.мемо)

    return <Clock/>
}



