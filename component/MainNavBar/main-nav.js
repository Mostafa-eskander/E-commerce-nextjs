import classes from './main-nav.module.css';
import NavBar from './navbar';
import NavSearch from './navSearch';

export default function MainNav() {  
    
    return(
        <header className={classes.header}>
            <div className={`${classes.container} container`}>
                <div className="logo">
                    <h1>E-commerce</h1>
                </div>
                <NavSearch />
                <NavBar />
            </div>
        </header>
    )
}