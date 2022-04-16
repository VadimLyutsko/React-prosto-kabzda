import React, {useReducer, useState} from "react";


type AccordionPropsType = {
    titleValue: string
}

type ActionType = {
    type: string
}

type StateType = {
    collapsed: boolean
}

const reducer = (state: StateType, action: ActionType): StateType => {
    if (action.type === "TOGGLE-COLLAPSED") {
        state.collapsed = !state.collapsed
        return state
    }

    return state
}


export const UncontrolledAccordion = (props: AccordionPropsType) => {
    // let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>*/}
            <AccordionTitle title={props.titleValue} onClick={() => {
                dispatch({type: "TOGGLE-COLLAPSED"})
            }}/>

            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}


const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={(e) => props.onClick()}> --- {props.title}---</h3>
    )
}


const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}