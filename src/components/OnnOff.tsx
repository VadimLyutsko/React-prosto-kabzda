import React, {FC} from "react";
import styles from './OnnOff.module.scss'

type OnnOffPropsType = {
    bool: boolean;
    setBool: (type: boolean) => void
}


export const OnnOff: FC<OnnOffPropsType> = ({bool: bool, setBool: setBool}) => {
    const onnClickHandler = () => {
        setBool(true)
    }

    const offClickHandler = () => {
        setBool(false)
    }


    return (
        <div className={styles.wrap}>
            <button className={bool ? styles.green : ''} onClick={onnClickHandler}>Onn</button>
            <button className={!bool ? styles.red : ''} onClick={offClickHandler}>Off</button>
            <button className={bool ? styles.green : styles.red}>indicator</button>
        </div>
    )
}
