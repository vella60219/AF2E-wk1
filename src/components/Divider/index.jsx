import styles from "./divider.module.css"

function DividerLight() {
    return (
        <hr className={styles.light} />
    );
}

function DividerDark() {
    return (
        <hr className={styles.dark} />
    );
}

export default DividerLight;
export { DividerDark };