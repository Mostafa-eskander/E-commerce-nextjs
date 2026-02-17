'use client';

import { useCart } from "@/store/Context"
import classes from './page.module.css';
import Image from "next/image";
import { Delete } from "@/component/MainNavBar/main-nav-icon";

export default function CartPage() {
    const {cart,totalPrice,removeToCart,addToCart,deleteAll} = useCart();

    const tax = (+totalPrice * 14) / 100;
    const total = (+tax + +totalPrice).toFixed(2);
    return(
        <section className={classes.cart}>
            <h1>My <span>Cart</span></h1>

            <div className={`${classes.container} container`}>
                <div className={classes.product}>
                    <ul>
                        {cart.map((product) => <li key={product.id} className={classes.list}>
                            <div className={classes.image}>
                                <Image src={product.images[0]} fill alt={product.title} />
                            </div>
                            <div className={classes.text}>
                                <h4>{product.title}</h4>
                                <span>${`${product.price} * ${product.quantity} = $${+product.price * product.quantity}`}</span>
                            </div>
                            <div className={classes.button}>
                                <button onClick={() => addToCart(product)}>+</button>
                                <h3>{product.quantity}</h3>
                                <button onClick={() => removeToCart(product)}>-</button>
                            </div>
                            <div className={classes.delete}>
                                <Delete onClick={() => deleteAll(product.id)}/>
                            </div>
                        </li>)}
                    </ul>
                </div>
                <div className={classes.checkout}>
                    <h2>Oreder Summary</h2>
                    <p>Subtotal: <span>${totalPrice}</span></p>
                    <p>Tax (14%): <span>${tax.toFixed(2)}</span></p>
                    <h3>Total: <span>${total}</span></h3>
                    <button>Preceed to Checkout</button>
                    <div></div>
                </div>
            </div>
        </section>
    )
}