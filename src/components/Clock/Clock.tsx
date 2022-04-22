import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type PropsType = {
    mode: "analog" | "digital"
}


export const Clock: React.FC<PropsType> = (props) => {
    const [date, setData] = useState(new Date())

    useEffect(() => {

        const intervalID = setInterval(() => {
            setData(new Date())
            console.log("Tick")
        }, 1000);

        return () => {
            clearInterval(intervalID)
        }

    }, [])


    let view;

    switch (props.mode) {
        case "analog":
            return view = <AnalogClockView date={date}/>
            break;
        case "digital":
        default:
            return view = <DigitalClockView date={date}/>
    }

    return (
        <div>
            {view}
        </div>
    )
}

export type ClockViewPropsType = {
    date: Date
}

