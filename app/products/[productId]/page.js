import { notFound } from "next/navigation";

import { getOneProduct } from "@/lib/product";
import ProductDetail from "@/component/ProductDetail/productDetail";
import ProductReview from "@/component/ProductDetail/productReview";

export default async function Product({params}) {
    const resolvedParams = await params;
    const productId = resolvedParams.productId;

    const product = await getOneProduct(productId);

    if(!product) {
        notFound();
    }

    return(
        <section className="product details">
            <ProductDetail product={product} />
            <ProductReview product={product}/>
        </section>
    )
}