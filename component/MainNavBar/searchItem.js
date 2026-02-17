'use client'

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation";
import Link from "next/link";

import classes from './navSearch.module.css';


export default function SearchItem({products =[]}) {
    const lasChange = useRef();
    const inputEnter = useRef();
    const pathName = usePathname(); 
    const [searchItem,setSearchItem] = useState("");
    const [viewSearch,setViewSearch] = useState(false);

    useEffect(() => {
        setViewSearch(searchItem !== '')
    }, [searchItem]);

    useEffect(() => {
        inputEnter.current.value = '';
        setSearchItem('');
    },[pathName]);


    const resultSearch = products.filter((product) => 
        product.title.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase()));

    
    function handleChange(event) {
        if (lasChange.current) {
            clearTimeout(lasChange.current);
        }

        lasChange.current = setTimeout(() => {
            setSearchItem(event.target.value);
            lasChange.current = null;
        }, 500);
    }

    return(
        <>
            <input type="search" placeholder="Search By Name" onChange={handleChange} ref={inputEnter} />
            <div className={`${viewSearch ? classes.actived : ''}`}>
                <ul>
                    {resultSearch.length > 1 && resultSearch.map((item) => {
                        return(
                            <li key={item.id}>
                                <img src={item.images[0]} alt={item.title} />
                                <Link href={`/products/${item.id}`}>{item.title}</Link>
                            </li>
                        )
                    })}
                    {resultSearch.length === 0 && <p style={{fontSize: '24px'}}>Not Found <span>{searchItem}</span></p>}
                </ul>
            </div>
        </>
    )
}