'use client';

import Image from "next/image";

import classes from './slider.module.css';
import Link from "next/link";
import { useEffect, useState } from "react";

const BANNERIMAGE = [
    {src: '/banner1.png', alt: 'Banner One'},
    {src: '/banner2.png', alt: 'Banner Two'},
    {src: '/banner3.png', alt: 'Banner Three'},
    {src: '/banner4.png', alt: 'Banner Four'},
]

export default function Slider() {
    const [indexImage,setIndexImage] = useState(0);

    useEffect(() => {
        BANNERIMAGE.forEach((image) => {
            const img = new window.Image();
            img.src = image.src;
        });
        const interval = setInterval(() => {
            setIndexImage((prev) => (prev + 1) % BANNERIMAGE.length);
        },10000)

       return () => clearInterval(interval);
    },[]);

    return(
        <div className={classes.image_div}>
            <Link href="/products">
                <div style={{height: '100%' ,width: '100%', position: 'relative'}}>
                    <Image 
                        className={classes.image}    
                        src={BANNERIMAGE[indexImage].src} 
                        alt={BANNERIMAGE[indexImage].alt} 
                        fill 
                        priority
                    />
                </div>
            </Link>
        </div>
    )
}

