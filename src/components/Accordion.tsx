import React from "react";
import {OnnOff} from "./OnnOff";

type AccordionPropsType ={
    bool:boolean;
}

export const Accordion = (props:AccordionPropsType)=> {


    return(
        <div>
            <OnnOff bool={props.bool}/>

        </div>
    )
}
