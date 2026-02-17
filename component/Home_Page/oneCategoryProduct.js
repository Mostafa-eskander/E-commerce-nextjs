'use client';

import Image from "next/image";
import TitleSection from "../ui/title_section";
import Link from "next/link";
import classes from './oneCategory.module.css';
import { useCart } from "@/store/Context";

export default function OneCategoryProduct({oneCategory,title}) {
    const {addToCart} = useCart();
    
    return(
        <section>
            <TitleSection>
                {title}
            </TitleSection>
            <ul className={classes.list}>
                {oneCategory.products.map((product) => (
                    <li key={product.id} className={classes.cart}>
                        <div>
                            <Image src={product.images[0]} width={200} height={200} alt="image" priority />
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <p className={classes.price}><span>{product.price}</span> $</p>
                            <div className={classes.buttons}>
                                <button onClick={() => addToCart(product)}>Add To Cart</button>
                                <Link href={`/products/${product.id}`}>Show More</Link>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}