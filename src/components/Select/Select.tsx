import React, {useState} from "react";
import styles from "./select.module.css"

type itemType = {
    title: string
    value: any
}


type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: itemType[]
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false)

    const selectedItem = props.items.find(i => i.value === props.value)
    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }

    return (
        <div>

            <span className={styles.selectCss} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {
                active &&
                <div>
                    {props.items.map(i =>
                        <div
                            className={styles.selectItems}
                            key={i.value}
                            onClick={() => {
                                onItemClick(i.value)
                            }}
                        >{i.title}
                        </div>)}
                </div>
            }
        </div>
    )
}