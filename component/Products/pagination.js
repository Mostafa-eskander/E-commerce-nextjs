import Link from 'next/link';

import classes from './pagination.module.css';

export default function ProductsPagination({data,page}) {
    
    const totalPages = Math.ceil(data.total / 12);

    return(
        <div className={classes.pagination}>
            {page > 1 && <Link href={`/products?page=${page - 1}`}>Prev</Link>}
            <p>Page <span>{page}</span> of {totalPages}</p>
            {page < totalPages && <Link href={`/products?page=${page + 1}`}>Next</Link>}
        </div>
    )
}