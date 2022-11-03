import styles from "./Theme.module.css";
import { TbBrightnessUp } from "react-icons/tb";
// import { MdOutlineBrightness2 } from "react-icons/md";
import { BsCart } from "react-icons/bs";


export default function Theme() {
    return (
        <div className={styles.theme}>
            <TbBrightnessUp className={styles.icon} />
            {/*<MdOutlineBrightness2 />*/}
            <input className={styles.input} type="text" placeholder="검색" />
            <div className={styles.cart}>
                <BsCart className={styles.icon} />
                <span className={styles.badge}>0</span>
            </div>
        </div>
    );
}