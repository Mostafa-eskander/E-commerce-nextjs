import Image from "next/image";

import classes from './page.module.css';
import TitleSection from "@/component/ui/title_section";

export default function AboutPage() {
    return (
        <section>
            <div className={`${classes.container} container`}>
                <div className={classes.image}>
                    <Image src='/carStore.png' alt="car store" fill />
                </div>
                <div className={classes.text}>
                    <TitleSection>
                        About Us
                    </TitleSection>
                    <p>
                        We are an online store dedicated to providing a smooth, secure, and enjoyable shopping experience for our customers. Our goal is to offer high-quality products at competitive prices, all in one convenient place.
                        We carefully select our products to meet the needs of our customers and continuously update our collection to keep up with the latest trends. We believe that online shopping should be easy, transparent, and reliable.
                        Customer satisfaction is our top priority. That’s why we offer secure payment methods, flexible delivery options, and responsive customer support to assist you at every step.
                        We aim to build long-term relationships with our customers by delivering quality, trust, and excellent service.
                    </p>
                </div>
            </div>
        </section>
    )
}