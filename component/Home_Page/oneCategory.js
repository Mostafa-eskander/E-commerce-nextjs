import { getOneCategory } from "@/lib/product";
import OneCategoryProduct from "./oneCategoryProduct";

export default async function OneCategory({title,name}) {
    const oneCategory = await getOneCategory(name);
    
    return (
        <OneCategoryProduct title={title} oneCategory={oneCategory}/>
    )
}