import styles from "./Product.module.css";

export default function Product(props) {

    return (
        <section>
            <h1 className={styles.title}>{props.title}</h1>
            <ul className={styles.products}>
                {
                    props.item.map(item => {
                        return (
                            <li className={styles.productItem} key={item.src}>
                                <img src={item.src} />
                                <div className={styles.productInfo}>
                                    <p className={styles.productTitle}>{item.title}</p>
                                    <p className={styles.price}>{item.price}</p>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </section>
    );
}