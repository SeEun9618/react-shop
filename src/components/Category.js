import styles from './Category.module.css';

export default function Category() {
    return (
        <div>
            <span className={styles.title}>패션</span>
            <span className={styles.title}>액세서리</span>
            <span className={styles.title}>디지털</span>
        </div>
    );
}