import DividerLight from "../Divider";

import styles from "./header.module.css"

function Header({ img, title, slogan }) {
    return (
        <header className={`${styles.header} ${styles.box}`}>
            <img className={styles.avatar} src={img} alt="avatar" />
            <h1 className={styles.title}>{title}</h1>
            <DividerLight />
            <p className={styles.slogan}>{slogan}</p>
        </header>
    );
}

export default Header;