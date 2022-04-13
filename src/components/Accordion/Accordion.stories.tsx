import React from 'react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";


export default {
    title: 'Accordion',
    component: Accordion,

};



export const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

export const MenuCollapseMode = Template.bind({})

MenuCollapseMode.args = {
    bool: true
}

export const MenuCollapseMode2 = Template.bind({})
MenuCollapseMode2.args = {
    bool: false
}
//export const MenuCollapseMode = () => <Accordion bool={true} setBool={x=>x} />
