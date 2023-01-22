import React from 'react';
// RouteLink
import { Link } from "react-router-dom";
// CSS Files
import Styles from './navbar.module.css';
import Custem from '../../../layOut/app.module.css';

const Navbar = ( props ) => {
    const {Men, Women, Unisex, Kids, Sellers, Arrival, Offer} = props;
    return (
        <nav className={Styles.navbar}>
            <div className={Custem.container}>
                <div className={Styles.navbarParednt}>
                    <Link className={Styles.navbarLink}>
                        <span>{Men}</span>
                    </Link>
                    <Link className={Styles.navbarLink}>
                        <span>{Women}</span>
                    </Link>
                    <Link className={Styles.navbarLink}>
                        <span>{Unisex}</span>
                    </Link>
                    <Link className={Styles.navbarLink}>
                        <span>{Kids}</span>
                    </Link>
                    <Link className={Styles.navbarLink}>
                        <span>{Sellers}</span>
                    </Link>
                    <Link className={Styles.navbarLink}>
                        <span>{Arrival}</span>
                    </Link>
                    <Link className={Styles.navbarLink}>
                        <span>{Offer}</span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;