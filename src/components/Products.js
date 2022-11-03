import Product from "./Product";
import styles from './Products.module.css';

import fassion1 from "../img/fassion1.jpg";
import fassion2 from "../img/fassion2.jpg";
import fassion3 from "../img/fassion3.jpg";
import fassion4 from "../img/fassion4.jpg";

import accessory1 from "../img/accessory1.jpg";
import accessory2 from "../img/accessory2.jpg";
import accessory3 from "../img/accessory3.jpg";
import accessory4 from "../img/accessory4.jpg";

import digital1 from "../img/digital1.jpg";
import digital2 from "../img/digital2.jpg";
import digital3 from "../img/digital3.jpg";
import digital4 from "../img/digital4.jpg";

export default function Products() {
    const fassion = [
        {
            src: fassion1,
            title: "Fashion Backpack",
            price: "$110"
        },
        {
            src: fassion2,
            title: "Mens Casual T-shirts",
            price: "$20"
        },
        {
            src: fassion3,
            title: "Mens Cotton Jacket",
            price: "$54"
        },
        {
            src: fassion4,
            title: "Mens Casual Slim Fit",
            price: "$15"
        },
    ];

    const accesory = [
        {
            src: accessory1,
            title: "Women's Gold Chain Bracelet",
            price: "$678"
        },
        {
            src: accessory2,
            title: "Solid Gold Petite",
            price: "$133"
        },
        {
            src: accessory3,
            title: "White Gold Princess",
            price: "$21"
        },
        {
            src: accessory4,
            title: "Rose Gold Plated Stainless Steel Double",
            price: "$15"
        },
    ];

    const digital = [
        {
            src: digital1,
            title: "WD 2TB Hard Drive",
            price: "$65"
        },
        {
            src: digital2,
            title: "Sandisk SSD PLUS 1TB Internal SSD",
            price: "$109"
        },
        {
            src: digital3,
            title: "Power 256GB SSD 3D A55",
            price: "$109"
        },
        {
            src: digital4,
            title: "WD 4TB Gaming Drive Works with Playstation 4 Portable",
            price: "$15"
        },
    ];

    return (
        <div className={styles.container}>
            <Product item={fassion} title={"패션"} />
            <Product item={accesory} title={"악세서리"} />
            <Product item={digital} title={"디지털"} />
        </div>
    );
}