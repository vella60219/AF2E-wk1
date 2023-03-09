import styles from "./imageItem.module.css";

function ImageItem({ image }) {
    return (
        <div className={styles.image}>
            <a href={image.href} className={styles.link}>
                <img src={image.src} alt={image.alt} className={styles.style} />
            </a>
            <p className={styles.title}>{image.title}</p>
        </div>
    );
}

export default ImageItem;