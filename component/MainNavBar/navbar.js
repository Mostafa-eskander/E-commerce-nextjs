'use client';

import { useEffect, useState } from "react";
import { BarIcon, CarShop, XmarkIcon } from "./main-nav-icon";
import Link from "next/link";
import classes from './main-nav.module.css'
import NavLink from "./nav-link";
import { usePathname } from "next/navigation";
import { useCart } from "@/store/Context";

export default function NavBar() {
    const [veiwNav, setVeiwNav] = useState(false);
    const pathName = usePathname();

    useEffect(() => {
        setVeiwNav(false)
    },[pathName])

    function handlerToggle() {
        setVeiwNav((prev) => !prev)
    }

    const {cart,totalProducts} = useCart();
    return(
        <nav className={classes.nav}>
            <BarIcon classN={classes.barIcon} handlerToggel={handlerToggle} />     
            <ul className={`${classes.list} ${veiwNav ? classes.active : ''}`}>
                <XmarkIcon classN={classes.xmarkIcon} handlerToggel={handlerToggle} />
                <h1 className={classes.navLogo}>E-commerce</h1>
                <li>
                    <NavLink href="/">Home</NavLink>
                </li>
                <li>
                    <NavLink href="/products">Products</NavLink>
                </li>
                <li>
                    <NavLink href="/about">About</NavLink>
                </li>
                <li>
                    <NavLink href="/contact">Contact us</NavLink>
                </li>
                <li>
                    <Link href="/login" className={classes.login}>Login</Link>
                </li>
            </ul>
            <Link href="/cart" className={classes.cart}>Cart <CarShop /> <span>{totalProducts}</span></Link>
        </nav>
    )
}