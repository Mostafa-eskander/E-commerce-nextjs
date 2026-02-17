'use client';

import Image from "next/image";
import Link from "next/link";

import ProductsPagination from './pagination';
import classes from './products.module.css';
import { useCart } from "@/store/Context";

export default function Products({data,page}) {
    const {addToCart} = useCart();
    
    return(
        <div className={classes.all_product}>
            <ul className={classes.list}>
                {data.products.map(product => (
                    <li key={product.id} className={classes.cart}>
                    <div>
                            <Image src={product.images[0]} width={200} height={200} alt="product image" loading="eager" />
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
            <ProductsPagination data={data} page={page}/>
        </div>
    )
}