import {getCategoryies} from '@/lib/product.js';
import TitleSection from '../ui/title_section';
import classes from './category.module.css';

export default async function Categories() {
    const category = await getCategoryies();
    
    return(
        <div className=''>
            <TitleSection>
                Categories
            </TitleSection>
            <ul className={classes.list}>
                {category.map((cat) => (
                    <li key={cat.slug}>{cat.name}</li>
                ))}
            </ul>
        </div>
    )
}