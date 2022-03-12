import React from "react";
import {OnnOff} from "./OnnOff";

type AccordionPropsType = {
    bool: boolean;
    setBool: (type: boolean) => void
}

export const Accordion = (props: AccordionPropsType) => {


    return (
        <div>
            <OnnOff bool={props.bool}
                    setBool={props.setBool}/>

        </div>
    )
}
