import React, {FC} from "react";
import styles from './OnOff.module.scss'

type OnOffPropsType = {
    bool: boolean;
    setBool: (type: boolean) => void
}


export const OnOff: FC<OnOffPropsType> = ({bool: bool, setBool: setBool}) => {
    const onClickHandler = () => {
        setBool(true)
    }

    const offClickHandler = () => {
        setBool(false)
    }



    return (
        <div className={styles.wrap}>
            <button className={bool ? styles.green : ''} onClick={onClickHandler}>Onn</button>
            <button className={!bool ? styles.red : ''} onClick={offClickHandler}>Off</button>
            <button  className={bool ? styles.indicatorGreen : styles.indicatorRed}>ind</button>
        </div>
    )
}
