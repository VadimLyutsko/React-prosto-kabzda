import React from "react";
type OnnOffPropsType ={
    bool:boolean;
}


export const OnnOff = (props:OnnOffPropsType)=> {


    return(
        <div>
            <button>Onn</button>
            <button>Off</button>
            <button>O/O</button>
        </div>
    )
}
