import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action("some action")
const onClickCallback = action("some item was clicked")

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"}
                                                  collapsed={true}
                                                  onChange={callback} items={[]}
                                                  onclick={onClickCallback}/>

export const MenuUnCollapsedMode = () => <Accordion titleValue={"Menu"}
                                                    collapsed={true}
                                                    onChange={callback}
                                                    onclick={onClickCallback}
                                                    items={[{title: "Vadim", value: 1}, {title: "Lola", value: 2}, {title: "Kitti", value: 3}]}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={"Users"}
                      collapsed={value}
                      onChange={() => setValue(!value)}
                      items={[{title: "Vadim", value: 1}, {title: "Lola", value: 2}, {title: "Kitti", value: 3}]}
                      onclick={onClickCallback}/>
}
// export const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>
//
// export const MenuCollapseMode = Template.bind({})
//
// MenuCollapseMode.args = {
//     collapsed: true
// }
//
// export const MenuCollapseMode2 = Template.bind({})
// MenuCollapseMode2.args = {
//     collapsed: false
// }
// //export const MenuCollapseMode = () => <Accordion bool={true} setBool={x=>x} />
