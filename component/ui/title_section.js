import classes from './title_section.module.css';

export default function TitleSection ({children}) {
    return (
        <h2 className={classes.title}>{children}</h2>
    )
}