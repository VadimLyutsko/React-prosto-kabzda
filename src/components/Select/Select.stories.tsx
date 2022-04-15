import {Accordion} from "../Accordion/Accordion";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";
import {useState} from "react";


export default {
    title: 'Select',
    component: Select,
};

export const WithValue = () => {
    const [value, setValue] = useState("2")
    return <>
        <Select
            value={value}
            onChange={setValue}
            items={[
                {value: "1", title: "Vadim"},
                {value: "2", title: "Lola"},
                {value: "3", title: "Kitti"}
            ]}/>


    </>
}
export const WithoutValue = () => {
    const [value, setValue] = useState(null)
   return <> <Select
       value={value}
        onChange={setValue}
        items={[
            {value: "1", title: "Vadim"},
            {value: "2", title: "Lola"},
            {value: "3", title: "Kitti"}
        ]}/>


    </>
}