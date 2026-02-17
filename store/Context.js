'use client';

import { createContext, useContext, useEffect, useState } from "react";

export function useCart () {
    return useContext(CartContextStore);
}

const CartContextStore = createContext();

export default function CartProvider({children}) {
    const [cart,setCart] = useState([]);
    
    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    function addToCart(product) {
        const isNewProduct = !cart.find(item => item.id === product.id);

        if (isNewProduct) {
            const wantsToBuy = confirm('Do you want to buy?');
            if (!wantsToBuy) return;
        }

        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);

            if (existing) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prev, { ...product, quantity: 1 }];
        });
    }


    function removeToCart(product) {
        setCart((prev) => {
            const existing = prev.find(item => item.id === product.id);

            if (!existing) return prev;

            if (existing.quantity === 1) {
                return prev.filter(item => item.id !== product.id);
            }

            return prev.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
        });
    }

    function deleteAll(productId) {
        if (!confirm('Do you want delete?')) return;
        setCart((prev) => prev.filter((product) => product.id !== productId))
    }

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    const totalProducts = cart.reduce((total,item) => total + item.quantity,0)
    return(
        <CartContextStore.Provider value={{cart , addToCart , removeToCart,deleteAll,totalPrice,totalProducts}}>
            {children}
        </CartContextStore.Provider>
    )
}