import FooterList, { FooterLi } from "./list";
import classes from './main-footer.module.css';

export default function MainFooter() {
    return(
        <footer>
            <div className={classes.top_footer}>
                <div className={`${classes.container} container`}>
                    <div>
                        <h1>E-commerce</h1>
                    </div>
                    <main className={classes.main}>
                        <FooterList title='Customer service'>
                            <FooterLi>Service and Warranty</FooterLi>
                            <FooterLi>Returns and Exchanges</FooterLi>
                            <FooterLi>secured online payment</FooterLi>
                            <FooterLi>shipping & delivery</FooterLi>
                        </FooterList>
                        <FooterList title='About Us'>
                            <FooterLi>About E-commerce</FooterLi>
                            <FooterLi>About Me</FooterLi>
                            <FooterLi>Newsletter</FooterLi>
                        </FooterList>
                        <FooterList title='Helping you save'>
                            <FooterLi>Extended Warranty Retail</FooterLi>
                            <FooterLi>MyClub Program</FooterLi>
                        </FooterList>
                        <FooterList title='Help & Support'>
                            <FooterLi>Contact Us</FooterLi>
                            <FooterLi>Terms & Conditions</FooterLi>
                            <FooterLi>Anti-Fraud Disclaimer</FooterLi>
                            <FooterLi>AResponsible Disclosure Policyr</FooterLi>
                            <FooterLi>FAQs</FooterLi>
                            <FooterLi>Find A Store</FooterLi>
                        </FooterList>
                    </main>
                </div>
            </div>
            <div className={classes.bottom_footer}>
                <div className={`${classes.conatiner} container`}>
                    <div>
                        <h1>Made by Mostafa</h1>
                    </div>
                    <div>
                        <p>© 2026 mostafa. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}