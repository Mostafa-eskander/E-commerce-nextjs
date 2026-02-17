'use client';

import Image from "next/image";

import classes from './productDetail.module.css';
import { useState } from "react";
import { useCart } from "@/store/Context";

export default function ProductDetail({product}) {
    const [currentImage,setCurrentImage] = useState(product.images[0]);

    function handleClick(image) {
        setCurrentImage(image)
    }

    const {addToCart} = useCart();
    return (
         <div className={`${classes.container} container`}>
            <div className={classes.image}>
                <Image src={currentImage} alt="product Image" width={300} height={300} priority />
                <div>
                    {product.images.map((image => (
                        <Image src={image} alt="product" width={50} height={50} key={image} priority onClick={() => handleClick(image)} />
                    )))}
                </div>
            </div>
            <div className={classes.text}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h3>rating  <span>{product.rating}</span> </h3>
                <h4>{product.price} <span>$</span></h4>
                <button onClick={() => addToCart(product)}>Add To Cart</button>
            </div>
        </div>
    )
}