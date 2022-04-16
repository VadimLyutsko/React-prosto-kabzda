import React from "react";

type itemType ={
    title:string
    value:any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean;
    onChange: () => void
    items: itemType[]
    onclick:(value:any)=>void
}

export const Accordion = (props: AccordionPropsType) => {


    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}
            />
            {!props.collapsed && <AccordionBody items={props.items} onclick={props.onclick}/>}

        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}


const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={(e) => props.onChange()}> --- {props.title}---</h3>
    )
}

export type AccordionBodyPropsType = {

    items: itemType[]
    onclick:(value:any)=>void
}

const AccordionBody = (props: AccordionBodyPropsType) => {
    return (
        <ul>
            {props.items.map((i,index) => <li onClick={()=>{props.onclick(i.value)}} key = {index}>{i.title}</li>)}
        </ul>
    )
}