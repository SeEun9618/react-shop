import styles from './Header.module.css';
import Category from "./Category";
import Theme from "./Theme";

export default function Header() {
    return (
        <div>
            <div className={styles.container}>
                <h1 className={styles.title}>React Shop</h1>
                <Category />
                <Theme />
            </div>
        </div>
    );
}