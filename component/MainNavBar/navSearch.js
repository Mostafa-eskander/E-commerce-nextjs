import { getAlllProductBySearch } from "@/lib/product";
import SearchItem from "./searchItem";
import classes from './navSearch.module.css';

export default async function NavSearch() {
    const products = await getAlllProductBySearch();

    return (
        <div className={classes.search}>
            <SearchItem products={products.products}/>
        </div>
    ) 
}