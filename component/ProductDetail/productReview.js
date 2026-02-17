import TitleSection from '../ui/title_section';
import classes from './productReview.module.css';

export default function ProductReview({product}) {
    return(
        <div className="container">
            <TitleSection>
                reviews
            </TitleSection>
        
            <div className={classes.reviews}>
                {product.reviews.map((review) => {
                    const id = crypto.randomUUID();
                    return(
                    <div key={id}>
                        <h1>{review.reviewerName}</h1>
                        <h4>{review.reviewerEmail}</h4>
                        <p>{review.comment}</p>
                        <h5>rating {review.rating}</h5>
                        <span>{review.date}</span>
                    </div>
                    )
                })
                }
            </div>
        </div>
    )
}