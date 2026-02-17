import { getAllProducts } from "@/lib/product";
import classes from './page.module.css';

import ProductCategory from "@/component/Products/productFilter";
import Products from "@/component/Products/products";

export default async function AllProducts({searchParams}) {
    const parmas = await searchParams;
    const page = Number(parmas.page) || 1;

    const data = await getAllProducts(page);


    return (
    <section>
        <div className={`${classes.container} container`}>
            <ProductCategory />
            <Products page={page} data={data}/>
        </div>
    </section>
    );
}