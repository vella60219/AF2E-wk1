import DividerLight from "../Divider";
import { DividerDark } from "../Divider";

import styles from "./blockTitle.module.css"

function BlackTitle({ text }) {
    return (
        <div className={styles.box}>
            <h1 className={styles.textDark}>{text}</h1>
            <DividerDark />
        </div>
    );
}

function WhiteTitle({ text }) {
    return (
        <div className={styles.box}>
            <h1 className={styles.textWhite}>{text}</h1>
            <DividerLight />
        </div>
    );
}

export default BlackTitle;
export { WhiteTitle };