// import styles from "./Option.module.css";
// import { TbBrightnessUp } from "react-icons/tb";
// import { MdOutlineBrightness2 } from "react-icons/md";
// import { BsCart } from "react-icons/bs";
//
// export default function Option() {
//     return (
//         <div className={styles.theme}>
//             <TbBrightnessUp className={styles.icon} />
//             {/*<MdOutlineBrightness2 />*/}
//             <input className={styles.input} type="text" placeholder="검색" />
//             <div className={styles.cart}>
//                 <BsCart className={styles.icon} />
//                 <span className={styles.badge}>0</span>
//             </div>
//         </div>
//     );
// }

import styles from "./Option.module.css";
import { TbBrightnessUp } from "react-icons/tb";
import { MdOutlineBrightness2 } from "react-icons/md";
import { BsCart } from "react-icons/bs";
import {UserInfoContextStore} from "./context";
import {useContext} from "react";


export default function Option() {

    const UserInfo = useContext(UserInfoContextStore);

    const icon = UserInfo.themeMode === 'dark'
        ? <TbBrightnessUp className={`${styles.icon} ${styles.dark}`} />
        : <MdOutlineBrightness2 className={styles.icon} />;

    return (
        <div className={styles.theme} onClick={UserInfo.toggleTheme}>
            <button onClick={UserInfo.toggleTheme} className={styles.button}>
                {icon}
            </button>
            <input className={styles.input} type="text" placeholder="검색" />
            <div className={styles.cart}>
                <BsCart className={styles.icon} />
                <span className={styles.badge}>0</span>
            </div>
        </div>
    );
}