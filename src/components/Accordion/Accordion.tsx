import React from "react";
import {OnOff} from "../OnOff/OnOff";


export type AccordionPropsType = {
    bool: boolean;
    setBool: (type: boolean) => void
}

export const Accordion = (props: AccordionPropsType) => {


    return (
        <div>
            <OnOff bool={props.bool}
                    setBool={props.setBool}/>

        </div>
    )
}
