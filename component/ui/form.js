import Link from 'next/link';

import classes from './form.module.css';
import TitleSection from './title_section';

export default function FormTamblet({title,children}) {
    return(
    <form className={classes.form}>
        <TitleSection>
            {title}
        </TitleSection>
        {children}
        <Link href="/">Sent</Link>
    </form>
    )
}